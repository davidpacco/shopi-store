import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../../Context"

type Props = {
  to: string
  isLogo?: boolean
  isSignIn?: boolean
  category?: string
  name: string
}

export function NavItem({ to, isLogo, isSignIn, category, name }: Props) {
  const {
    setSignOut,
    setSearchedCategory
  } = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  const handleSignOut = () => {
    localStorage.setItem('sign-out', JSON.stringify(true))
    setSignOut(true)
  }

  const onClickAction = () => {
    if (typeof category === 'string') {
      setSearchedCategory(category)
    }
    if (isSignIn) {
      handleSignOut()
    }
  }

  return (
    <li
      className={isLogo ? "font-extrabold text-lg" : undefined}
      >
      <NavLink
        to={ to }
        className={({ isActive }) => (isActive && !isLogo) ? activeStyle : undefined}
        onClick={() => onClickAction()}
      >
        { name }
      </NavLink>
    </li>
  )
}