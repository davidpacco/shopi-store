import { useContext } from "react"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { CartProductsData } from "../../Interfaces/Interfaces"

export function MyOrders() {
  const { order } = useContext(ShoppingCartContext)

  const getTotalProducts = (products:CartProductsData[]) => {
    let total = 0
    products.forEach(product => total += product.quantity);
    return total
  }

  return (
    <div className="flex flex-col gap-4 mb-10">
      {order.map((order, index) => (
        <Link
          to={`/my-orders/${index + 1}`}
          key={index}
        >
          <OrdersCard
            id={index + 1}
            totalPrice={order.total}
            totalProducts={getTotalProducts(order.products)}
            date={order.date}
          />
        </Link>
      ))}
    </div>
  )
}