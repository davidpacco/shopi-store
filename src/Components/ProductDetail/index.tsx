import { useContext } from 'react'
import './styles.css'
import { ShoppingCartContext } from '../../Context'

export function ProductDetail() {
  const { closeProductDetail } = useContext(ShoppingCartContext)

  return (
    <aside className="product-detail flex flex-col fixed right-0 bottom-0 bg-white border border-black rounded-xl">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-bold text-lg">Detail</h2>
        <button onClick={() => closeProductDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </aside>
  )
}