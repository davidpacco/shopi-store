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

export type ShoppingCartContextType = {
  counter: number
  setCounter: (num: number) => void
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
  productInfo: ProductDataType
  setProductInfo: (product: ProductDataType) => void
  cartProducts: ProductDataType[],
  setCartProducts: (product: ProductDataType[]) => void
}