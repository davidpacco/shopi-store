import { ReactNode, createContext, useState } from "react";
import { ShoppingCartContextType, ProductDataType, CartProductsDataType } from "../Interfaces/Interfaces";

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  // Shopping cart - icon counter
  const [counter, setCounter] = useState(0)

  // Product detail side bar - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Selected product details
  const [productInfo, setProductInfo] = useState({} as ProductDataType)

  // Checkout side menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Shopping cart - add products
  const [cartProducts, setCartProducts] = useState([] as CartProductsDataType[])

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
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}