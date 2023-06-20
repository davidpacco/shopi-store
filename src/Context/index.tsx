import { ReactNode, createContext, useEffect, useState } from "react";
import { ShoppingCartContextType, ProductData, CartProductsData, Order } from "../Interfaces/Interfaces";

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  // Get products from API
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[])

  // Get products by title
  const [searchedTitle, setSearchedTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  // Shopping cart - icon counter
  const [counter, setCounter] = useState(0)

  // Product detail side bar - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Selected product details
  const [productInfo, setProductInfo] = useState({} as ProductData)

  // Checkout side menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Shopping cart - add products
  const [cartProducts, setCartProducts] = useState([] as CartProductsData[])

  // Shopping cart - place order
  const [order, setOrder] = useState([] as Order[])

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        setProducts,
        searchedTitle,
        setSearchedTitle,
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
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}