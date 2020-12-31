import { useState } from 'react'
import type { FunctionComponent } from 'react'
import { Navbar } from './components/navigation/Navbar'
import MobileSidebarOverlay from './components/navigation/MobileSidebarOverlay'
import MobileSidebarModal from './components/navigation/MobileSidebarModal'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home-page/Home'
import Cart from './components/cart/Cart'
import Login from './components/login-register/Login'
import Modal from 'react-modal'
import Register from './components/login-register/Register'
import Shop from './components/shop/Shop'
import ProductPage from './components/Product/ProductPage'

const App: FunctionComponent = () => {
  const [sidebar, setSidebar] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const openRegisterModal = () => {
    setSidebar(false)
    setRegisterModal(!registerModal)
  }
  const mobileSidebar = () => setSidebar(!sidebar)
  const openLoginModal = () => {
    setSidebar(false)
    setLoginModal(!loginModal)
  }
  const closeModal = () => false
  return (
    <div className='bg-white'>
      {sidebar ? (
        <div>
          <MobileSidebarOverlay mobileSidebar={mobileSidebar} />
          <MobileSidebarModal
            openLoginModal={openLoginModal}
            openRegisterModal={openRegisterModal}
          />
        </div>
      ) : (
        ''
      )}

      <Modal
        isOpen={loginModal}
        onRequestClose={closeModal}
        className='w-screen h-screen flex justify-center items-center'>
        <Login openLoginModal={openLoginModal} />
      </Modal>

      <Modal
        isOpen={registerModal}
        onRequestClose={closeModal}
        className='w-screen h-screen flex justify-center items-center'>
        <Register openRegisterModal={openRegisterModal} />
      </Modal>

      <Navbar
        mobileSidebar={mobileSidebar}
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <Switch>
        <Route exact path='/product/:id' component={ProductPage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
