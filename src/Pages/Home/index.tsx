import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { ProductDataType } from "../../Interfaces/Interfaces"

export function Home() {
  const [products, setProducts] = useState<ProductDataType[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {
        products?.map(product => (
          <Card
          key={product.id}
          product={product}
          />
        ))
      }
    </div>
  )
}