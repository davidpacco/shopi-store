import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

export function SignIn() {
  const [view, setView] = useState('login')
  const form = useRef<HTMLFormElement>(null)
  const {
    setSignOut,
    account,
    setAccount
  } = useContext(ShoppingCartContext)

  const handleSignOut = () => {
    localStorage.setItem('sign-out', JSON.stringify(false))
    setSignOut(false)
  }

  const createAccount= () => {
    if (form.current) {
      const formData = new FormData(form.current)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }

      const stringifiedAccount = JSON.stringify(data)
      localStorage.setItem('account', stringifiedAccount)
      setAccount(data)
    }

    handleSignOut()
  }

  const lsAccount = localStorage.getItem('account')
  const parsedAccount = JSON.parse(lsAccount as string)

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInState = account ? Object.keys(account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInState

  const renderLogIn = () => {
    return (
      <>
        <h1 className="text-xl font-bold text-center mb-3">
          Welcome
        </h1>
        <div className="flex flex-col w-80 gap-3">
          <p>
            <span className="font-light">Email: </span>
            <span className="font-medium">{parsedAccount?.email}</span>
          </p>
          <p>
            <span className="font-light">Password: </span>
            <span className="font-medium">{parsedAccount?.password}</span>
          </p>
          <Link to="/">
            <button
              className="text-white font-semibold bg-black border-2 border-black rounded-lg py-1 w-full duration-200 disabled:cursor-not-allowed disabled:bg-black/40 disabled:border-black/0"
              disabled={!hasUserAnAccount}
              onClick={() => handleSignOut()}
            >
              Log in
            </button>
          </Link>
          <div className="text-center mb-4">
            <a className="font-light underline underline-offset-4 text-sm" href="/">Forgot my password</a>
          </div>
          <button
            className="text-black font-semibold bg-white border-2 border-black rounded-lg py-1 w-full"
            onClick={() => setView('sign-up')}>
            Sign up
          </button>
        </div>
      </>
    )
  }

  const renderSignUp = () => {
    return (
      <>
        <h1 className="text-xl font-bold text-center mb-3">
          Register
        </h1>
        <form ref={form} className="flex flex-col gap-4 w-80">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-base">Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={parsedAccount?.name}
              placeholder="Name..."
              className="rounded-xl border border-black placeholder:font-light placeholder:text-base px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-base">Your email:</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={parsedAccount?.email}
              placeholder="Email..."
              className="rounded-xl border border-black placeholder:font-light placeholder:text-base px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-base">Your password:</label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={parsedAccount?.password}
              placeholder="Password..."
              className="rounded-xl border border-black placeholder:font-light placeholder:text-base px-4 py-2"
            />
          </div>
          <Link to="/">
            <button
              className="text-white font-semibold bg-black border-2 border-black rounded-lg py-1 w-full active:scale-90 h-[40px]"
              onClick={() => createAccount()}
            >
              Create account
            </button>
          </Link>
        </form>
      </>
    )
  }

  const renderView = () => view === 'login' ? renderLogIn() : renderSignUp()

  return (
    <>
      {renderView()}
    </>
  )
}