import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import { CartProductsData } from '../../Interfaces/Interfaces'

export function ProductDetail() {
  const {
    signOut,
    counter,
    setCounter,
    closeProductDetail,
    openCheckoutSideMenu,
    productInfo,
    cartProducts,
    setCartProducts
  } = useContext(ShoppingCartContext)

  const lsSignOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(lsSignOut as string)
  const isUserSignOut = signOut || parsedSignOut

  function addToCart() {
    let index = -1
    for (let i = 0; i < cartProducts.length; i++) {
      if (productInfo.id === cartProducts[i].id) {
        index = i
      }
    }

    if (index === -1) {
      const productAdded:CartProductsData = {
        ...productInfo,
        quantity: 1
      }
      setCartProducts([...cartProducts, productAdded])
    } else {
      cartProducts[index].quantity += 1
    }
    closeProductDetail()
    openCheckoutSideMenu()
    setCounter(counter + 1)
  }

  return (
    <aside className="product-detail flex flex-col fixed right-0 bottom-0 bg-white border border-black rounded-xl p-6 gap-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Detail</h2>
        <button
          className='duration-200 hover:scale-110'
          onClick={() => closeProductDetail()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <figure className="">
        <img
          className='w-full h-full rounded-xl'
          src={productInfo.images[0]}
          alt={ productInfo.title }
        />
      </figure>
      <p className='flex flex-col'>
        <span className='font-bold text-lg'>
          { productInfo.title }
        </span>
        <span className='font-medium mb-2'>
          ${ productInfo.price }
        </span>
        <span className='font-light'>
          { productInfo.description }
        </span>
      </p>
      <button
        className=' text-white font-semibold bg-black border-2 border-black rounded-lg h-9 w-full duration-200 active:scale-90 hover:bg-white hover:text-black'
        onClick={() => isUserSignOut ? window.location.href = '/signin' : addToCart()}
      >
          Add to cart
      </button>
    </aside>
  )
}