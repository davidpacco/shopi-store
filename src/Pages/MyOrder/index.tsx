import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { CheckoutOrderCard } from "../../Components/CheckoutOrderCard"

export function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = '' + order.length

  const id = Number(index)

  if (order.length > 0) {
    const { date, products, total } = order[id - 1]
    return (
      <div className="w-80 pb-10">
        <div className="relative">
          <h3 className="text-xl font-bold text-center">
            My order
          </h3>
          <Link to='/my-orders'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-full absolute left-0 top-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Link>
        </div>
        <div className="w-full">
          <p className="text-sm text-center">{date ? date.toDateString() : ''}</p>
          {
            products.map((product, index) => (
              <CheckoutOrderCard
                key={product.id}
                product={{...product}}
                index={index}
              />
            ))
          }
          <p className="flex justify-between font-bold text-lg border-t-2 border-t-black pt-2 mt-1">
            <span>Total</span>
            <span>{`$${total}`}</span>
          </p>
        </div>

      </div>
    )
  }

}