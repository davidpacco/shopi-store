import { ReactNode, createContext, useState } from "react";

type ShoppingCartContextType = {
  counter: number
  setCounter: (num: number) => void
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  const [counter, setCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}