import { NavItem } from "./NavItem"
import { NavItemType } from "../../Interfaces/Interfaces"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

export function NavBar() {
  const { counter } = useContext(ShoppingCartContext)

  const NavBarLeft:NavItemType[] = [
    { to: '/', name: 'Shopi', logo: true },
    { to: '/', name: 'All' },
    { to: 'clothes', name: 'Clothes' },
    { to: 'electronics', name: 'Electronics' },
    { to: 'furnitures', name: 'Furnitures' },
    { to: 'toys', name: 'Toys' },
    { to: 'others', name: 'Others' },
  ]

  const NavBarRight:NavItemType[] = [
    { to: 'my-orders', name: 'My orders' },
    { to: 'my-account', name: 'My account' },
    { to: 'signin', name: 'Sign In' },
  ]

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-3 px-8 font-light text-base top-0">
      <ul className="flex items-center gap-3">

        {NavBarLeft.map(item => (
          <NavItem
            to={item.to}
            isLogo={item?.logo}
          >
            {item.name}
          </NavItem>
        ))}

      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          customer@mail.com
        </li>

        {NavBarRight.map(item => (
          <NavItem to={item.to}>
            {item.name}
          </NavItem>
        ))}

        <li className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <span className="">
            { counter }
          </span>
        </li>
      </ul>
    </nav>
  )
}