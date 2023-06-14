import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { SignIn } from '../SignIn'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { NavBar } from '../../Components/NavBar'
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <NavBar />
    </BrowserRouter>
  )
}

export default App
