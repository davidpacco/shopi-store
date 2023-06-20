import { CartProductsData } from "../Interfaces/Interfaces"

export const getTotal = (products: CartProductsData[]) => {
  let sum = 0
  for (let i = 0; i < products.length; i++) sum += (products[i].price * products[i].quantity)
  return sum
}