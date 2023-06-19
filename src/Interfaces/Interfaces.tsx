export type NavItemType = {
  to: string
  name: string
  logo?: boolean
}

export type ProductDataType = {
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

export type CartProductsDataType = ProductDataType & ProductQuantity

export type ShoppingCartContextType = {
  counter: number
  setCounter: (num: number) => void
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
  productInfo: ProductDataType
  setProductInfo: (product: ProductDataType) => void
  cartProducts: CartProductsDataType[],
  setCartProducts: (product: CartProductsDataType[]) => void
  isCheckoutSideMenuOpen: boolean,
  openCheckoutSideMenu: () => void,
  closeCheckoutSideMenu: () => void,
  order: Order[],
  setOrder: (order: Order[]) => void
}

export type Order = {
  date: Date
  products: CartProductsDataType[]
  total: number
}