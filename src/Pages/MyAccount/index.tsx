import { useContext, useRef, useState } from "react"
import { ShoppingCartContext } from "../../Context"

export function MyAccount() {
  const { setAccount } = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account as string)
  const form = useRef(null)

  const editAccount = () => {
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
  }

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80 gap-1">
        <p>
          <span>Name: </span>
          <span className="font-medium">{ parsedAccount.name }</span>
        </p>
        <p>
          <span>Email: </span>
          <span className="font-medium">{ parsedAccount.email }</span>
        </p>
        <button
          className="text-white font-semibold bg-black border-2 border-black rounded-lg py-1 w-full mt-4"
          onClick={() => setView('edit-user-info')}
        >
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-light'>Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Name..."
            className='rounded-lg border border-black placeholder:font-light placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-light'>Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="Email..."
            className='rounded-lg border border-black placeholder:font-light placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-base'>Your password:</label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="Password..."
            className='rounded-lg border border-black placeholder:font-light placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <button
          className='text-white font-semibold bg-black border-2 border-black rounded-lg w-full mt-3 py-2'
          onClick={() => {setView('user-info'), editAccount()}}>
          Save
        </button>
      </form>
    )
  }

  const renderView = () => view === 'user-info' ? renderUserInfo() : renderEditUserInfo()

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-3">
        My account
      </h1>
      { renderView() }
    </>
  )
}