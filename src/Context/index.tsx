import { ReactNode, createContext, useEffect, useState } from "react";
import { ShoppingCartContextType, ProductData, CartProductsData, Order } from "../Interfaces/Interfaces";

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  // Get products from API
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[])

  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([] as ProductData[])

  // Get products by title
  const [searchedTitle, setSearchedTitle] = useState('')

  // Get products by category
  const [searchedCategory, setSearchedCategory] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  const getFilteredProductsByTitle = (products: ProductData[], searchedTitle: string) => {
    return products.filter(product => product.title.toLowerCase().includes(searchedTitle.toLowerCase()))
  }

  const getFilteredProductsByCategory = (products: ProductData[], searchedCategory: string) => {
    return products.filter(product => product.category.name.includes(searchedCategory))
  }

  useEffect(() => {
    if (searchedTitle && searchedCategory) setFilteredProducts(getFilteredProductsByCategory(products, searchedCategory).filter(product => product.title.toLowerCase().includes(searchedTitle.toLowerCase())))
    if (searchedTitle && !searchedCategory) setFilteredProducts(getFilteredProductsByTitle(products, searchedTitle))
    if (!searchedTitle && searchedCategory) setFilteredProducts(getFilteredProductsByCategory(products, searchedCategory))
    if (!searchedTitle && !searchedCategory) setFilteredProducts(products)
  }, [products, searchedTitle, searchedCategory])

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
  console.log(filteredProducts)

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        searchedTitle,
        setSearchedTitle,
        searchedCategory,
        setSearchedCategory,
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