import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckoutOrderCard } from "../../Components/CheckoutOrderCard"

export function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  if (order.length > 0) {
    const { date, products, total } = order.slice(-1)[0]
    return (
      <div className="w-80 pb-10">
        <h3 className="text-xl font-bold text-center">
          My order
        </h3>
        <div className="w-full">
          <p className="text-sm text-center">{date ? date.toDateString() : 'no'}</p>
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