import { ReactNode, useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../../Context"

type Props = {
  to: string
  isLogo?: boolean
  category?: string
  children: ReactNode
}

export function NavItem({ to, isLogo, category, children }: Props) {
  const { setSearchedCategory } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <li
      className={isLogo ? "font-extrabold text-lg" : undefined}
      >
      <NavLink
        to={ to }
        className={({ isActive }) => (isActive && !isLogo) ? activeStyle : undefined}
        onClick={() => typeof category === 'string' && setSearchedCategory(category)}
      >
        { children }
      </NavLink>
    </li>
  )
}