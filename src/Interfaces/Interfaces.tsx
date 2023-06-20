export type NavItemType = {
  to: string
  name: string
  logo?: boolean
}

export type ProductData = {
  title: string
  id: number
  price: number
  description: string
  category: {
    name: string
  }
  images: string[]
}

type ProductQuantity = {
  quantity: number
}

export type CartProductsData = ProductData & ProductQuantity

export type ShoppingCartContextType = {
  products: ProductData[]
  setProducts: (products: ProductData[]) => void
  filteredProducts: ProductData[]
  searchedTitle: string
  setSearchedTitle: (text: string) => void
  counter: number
  setCounter: (num: number) => void
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
  productInfo: ProductData
  setProductInfo: (product: ProductData) => void
  cartProducts: CartProductsData[],
  setCartProducts: (product: CartProductsData[]) => void
  isCheckoutSideMenuOpen: boolean,
  openCheckoutSideMenu: () => void,
  closeCheckoutSideMenu: () => void,
  order: Order[],
  setOrder: (order: Order[]) => void
}

export type Order = {
  date: Date
  products: CartProductsData[]
  total: number
}