import { CartProductsData } from "../Interfaces/Interfaces"

export const getTotal = (products: CartProductsData[]) => {
  let sum = 0
  for (let i = 0; i < products.length; i++) sum += (products[i].price * products[i].quantity)
  return sum
}

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.set('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }

  return { parsedAccount, parsedSignOut }
}