import { NavItem } from "./NavItem"
import { NavItemType } from "../../Interfaces/Interfaces"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"

export function NavBar() {
  const {
    signOut,
    counter,
    closeProductDetail,
    openCheckoutSideMenu
  } = useContext(ShoppingCartContext)

  const lsSignOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(lsSignOut as string)
  const isUserSignOut = signOut || parsedSignOut

  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account as string)

  const NavBarLeft:NavItemType[] = [
    { to: '/', name: 'Shopi', category: '', isLogo: true },
    { to: '/', name: 'All', category: '' },
    { to: 'clothes', name: 'Clothes', category: 'Clothes' },
    { to: 'electronics', name: 'Electronics', category: 'Electronics' },
    { to: 'furnitures', name: 'Furnitures', category: 'Furniture' },
    { to: 'toys', name: 'Toys', category: 'Toys' },
    { to: 'others', name: 'Others', category: 'Others' },
  ]

  const NavBarRight:NavItemType[] = [
    { to: 'my-orders', name: 'My orders' },
    { to: 'my-account', name: 'My account' },
    { to: 'signin', name: 'Sign Out', isSignIn: true },
  ]

  const renderView = () => {
    if(isUserSignOut) {
      return (
        <>
          <li>
            <NavLink
              to="signin"
              className={({ isActive }) => (isActive) ? 'underline underline-offset-4' : undefined}
            >
              Sign in
            </NavLink>
          </li>
        </>
      )

    } else {
      return (
        <>
          <li className="text-black/60">
            { parsedAccount.email }
          </li>

          {NavBarRight.map(item => (
            <NavItem
              key={item.name}
              to={item.to}
              isSignIn={item.isSignIn}
              name={item.name}
            />
          ))}

          <li
            className="flex cursor-pointer relative"
            onClick={() => {
              closeProductDetail()
              openCheckoutSideMenu()
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className={`${counter === 0 ? 'hidden': 'flex'} absolute bg-black rounded-full text-white h-4 w-4 text-xs justify-center items-center font-bold bottom-3 left-3`}>
              { counter }
            </span>
          </li>
        </>
      )
    }
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-3 px-8 font-light text-base top-0 bg-white">
      <ul className="flex items-center gap-3">

        {NavBarLeft.map(item => (
          <NavItem
            key={item.name}
            to={item.to}
            isLogo={item?.isLogo}
            category={item?.category}
            name={item.name}
          />
        ))}

      </ul>

      <ul className="flex items-center gap-3">
        {renderView()}
      </ul>
    </nav>
  )
}