export type NavItemType = {
  to: string
  name: string
  isLogo?: boolean
  isSignIn?: boolean
  category?: string
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
  setSearchedTitle: (title: string) => void
  searchedCategory: string
  setSearchedCategory: (category: string) => void
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
  account: object
  setAccount: (obj: object) => void
  signOut: boolean
  setSignOut: (bool: boolean) => void
}

export type Order = {
  date: Date
  products: CartProductsData[]
  total: number
}