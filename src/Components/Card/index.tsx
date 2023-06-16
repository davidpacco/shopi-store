import { useContext } from "react"
import { ProductDataType } from "../../Interfaces/Interfaces"
import { ShoppingCartContext } from "../../Context"

export function Card({ product }: { product: ProductDataType }) {
  const { counter, setCounter } = useContext(ShoppingCartContext)

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-2xl">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-2">
          { product.category.name }
        </span>
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={`${ product.images[0] }`}
          alt="headphones"
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">
          { product.title }
        </span>
        <span className="text-lg font-medium">
          { `$${ product.price }` }
        </span>
      </p>
    </div>
  )
}