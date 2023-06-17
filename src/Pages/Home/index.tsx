import { useState, useEffect, useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ProductDataType } from "../../Interfaces/Interfaces"
import { ShoppingCartContext } from "../../Context";

export function Home() {
  const [products, setProducts] = useState<ProductDataType[] | null>(null)
  const { isProductDetailOpen } = useContext(ShoppingCartContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
        {
          products?.map(product => (
            <Card
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
      { isProductDetailOpen && <ProductDetail /> }
    </>
  )
}