import { NavItem } from "./NavItem"
import { NavItemType } from "../../Interfaces/Interfaces"

export function NavBar() {
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
    <nav className="flex justify-between items-center fixed z-10 w-full py-3 px-8 font-light text-base">
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

        <li>
          🛒0
        </li>
      </ul>
    </nav>
  )
}