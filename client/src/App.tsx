import type { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { ReduxStoreInterface } from './interfaces/reduxStoreInterfaces'

//components
import Home from './components/home-page/Home'
import Cart from './components/cart/Cart'
import Login from './components/login-register/Login'
import Modal from 'react-modal'
import Register from './components/login-register/Register'
import Shop from './components/shop/Shop'
import ProductPage from './components/Product/ProductPage'
import { Navbar } from './components/navigation/Navbar'
import MobileSidebarModal from './components/navigation/MobileSidebarModal'
import Checkout from './components/checkout/Checkout'

const App: FunctionComponent = () => {
  const { sidebar, loginModal, registerModal } = useSelector(
    (state: ReduxStoreInterface) => state.modalState
  )

  return (
    <div className='bg-white'>
      {sidebar && <MobileSidebarModal />}

      <Modal
        isOpen={loginModal}
        onRequestClose={() => false}
        className='w-screen h-screen flex justify-center items-center'>
        <Login />
      </Modal>

      <Modal
        isOpen={registerModal}
        onRequestClose={() => false}
        className='w-screen h-screen flex justify-center items-center'>
        <Register />
      </Modal>

      <Navbar />
      <Switch>
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/product/:id' component={ProductPage} />
        <Route exact path='/shop/:category' component={Shop} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
