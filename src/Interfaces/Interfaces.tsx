export type NavItemType = {
  to: string
  name: string
  logo?: boolean
}

export type ProductDataType = {
  title: string
  id: number
  price: number
  category: {
    name: string
  }
  images: string[]
}