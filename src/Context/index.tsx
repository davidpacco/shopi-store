import { ReactNode, createContext, useState } from "react";
import { ShoppingCartContextType, ProductDataType } from "../Interfaces/Interfaces";

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  // Shopping cart - icon counter
  const [counter, setCounter] = useState(0)

  // Shopping cart - add products
  const [cartProducts, setCartProducts] = useState([] as ProductDataType[])

  // Product detail side bar - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Selected product details
  const [productInfo, setProductInfo] = useState({} as ProductDataType)

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productInfo,
        setProductInfo,
        cartProducts,
        setCartProducts
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}