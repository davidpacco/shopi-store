import { useContext } from "react"
import { ProductDataType } from "../../Interfaces/Interfaces"
import { ShoppingCartContext } from "../../Context"

export function Card({ product }: { product: ProductDataType }) {
  const {
    counter,
    setCounter,
    openProductDetail,
    setProductInfo,
    cartProducts,
    setCartProducts
  } = useContext(ShoppingCartContext)

  function showProduct() {
    setProductInfo(product)
    openProductDetail()
  }

  function addToCart() {
    setCartProducts([...cartProducts, product])
    setCounter(counter + 1)
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 rounded-2xl h-fit"
      onClick={() => showProduct()}
    >
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
          className="absolute top-0 right-0 grid place-content-center bg-white w-6 h-6 rounded-full m-2 p-2 active:scale-90 duration-200 origin-center"
          onClick={(e) => {
            addToCart()
            e.stopPropagation()
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
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