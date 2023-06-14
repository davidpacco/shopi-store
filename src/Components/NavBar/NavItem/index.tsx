import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type Props = {
  to: string
  isLogo?: boolean
  children: ReactNode
}

export function NavItem({ to, isLogo, children }: Props) {
  const activeStyle = 'underline underline-offset-4'

  return (
    <li className={isLogo ? "font-extrabold text-lg" : undefined}>
      <NavLink
        to={ to }
        className={({ isActive }) => (isActive && !isLogo) ? activeStyle : undefined}
      >
        { children }
      </NavLink>
    </li>
  )
}