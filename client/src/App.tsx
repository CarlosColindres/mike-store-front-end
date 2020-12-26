import { useState } from 'react'
import type { FunctionComponent } from 'react'
import { Navbar } from './components/navigation/Navbar'
import MobileSidebarOverlay from './components/navigation/MobileSidebarOverlay'
import MobileSidebarModal from './components/navigation/MobileSidebarModal'
import {Route} from 'react-router-dom'
import Home from './components/home-page/Home'
import SalesAlertNotification from './components/home-page/sales-alerts/SalesAlertNotification'
import Cart from './components/cart/Cart'
const App: FunctionComponent = () => {
  const [sidebar, setSidebar] = useState(false)

  const mobileSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      {sidebar ? (
        <div className='transition'>
          <MobileSidebarOverlay mobileSidebar={mobileSidebar} />
          <MobileSidebarModal />
        </div>
      ) : (
        ''
      )}
      <Navbar mobileSidebar={mobileSidebar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart}/>
    </div>
  )
}

export default App
