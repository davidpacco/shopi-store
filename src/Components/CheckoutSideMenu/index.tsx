import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { CheckoutOrderCard } from '../CheckoutOrderCard'
import { getTotal } from '../../Utils'
import './styles.css'

export function CheckoutSideMenu() {
  const {
    counter,
    setCounter,
    cartProducts,
    setCartProducts,
    closeCheckoutSideMenu,
    order,
    setOrder
  } = useContext(ShoppingCartContext)
  const isCartEmpty = () => {
    return cartProducts.length === 0
  }

  const deleteCartProduct = (index: number) => {
    const updatedCart = [...cartProducts]
    setCounter(counter - cartProducts[index].quantity)
    updatedCart.splice(index, 1)
    setCartProducts(updatedCart)
  }

  const placeOrder = () => {
    const newOrder = {
      date: new Date(),
      products: cartProducts,
      total: getTotal(cartProducts)
    }
    setOrder([...order, newOrder])
    setCartProducts([])
    closeCheckoutSideMenu()
    setCounter(0)
  }

  return (
    <aside className="checkout-menu flex flex-col fixed right-0 bottom-0 bg-white border border-black rounded-xl p-6 gap-3 overflow-y-scroll">

      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Order detail</h2>
        <button
          className='duration-200 hover:scale-110'
          onClick={() => closeCheckoutSideMenu()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {
        cartProducts.map((product, index) => (
          <CheckoutOrderCard
            key={product.id}
            product={{...product}}
            index={index}
            deleteCartProduct={deleteCartProduct}
          />
        ))
      }

      <div className="bg-white sticky bottom-1 flex flex-col gap-2">
        <p className={`${isCartEmpty() ? "hidden" : "flex"} justify-between font-bold text-lg border-t-2 pt-2 border-black`}>
          <span>Total</span>
          <span>${ getTotal(cartProducts) }</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className={`${isCartEmpty() ? "hidden" : "grid"} text-white font-semibold bg-black border-2 border-black rounded-lg py-1 w-full duration-200 active:scale-90 hover:bg-white hover:text-black`}
            onClick={placeOrder}
          >
            Proceed to checkout
          </button>
        </Link>
      </div>
      <p className={`${isCartEmpty() ? "grid" : "hidden"} place-content-center text-center h-full text-lg font-medium`}>Your cart is empty</p>
    </aside>
  )
}
