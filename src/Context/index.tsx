import { ReactNode, createContext, useState } from "react";
import { ShoppingCartContextType, ProductDataType } from "../Interfaces/Interfaces";

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  // Shopping cart icon counter
  const [counter, setCounter] = useState(0)

  // Product detail side bar - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Selected product details
  const [productInfo, setProductInfo] = useState<ProductDataType>({} as ProductDataType)

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productInfo,
        setProductInfo
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}