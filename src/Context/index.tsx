import { ReactNode, createContext, useState } from "react";

type ShoppingCartContextType = {
  counter: number
  setCounter: (num: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: {children: ReactNode}) {
  const [counter, setCounter] = useState(0)

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  )
}