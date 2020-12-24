import { useState } from 'react'
import type { FunctionComponent } from 'react'
import { Navbar } from './components/navigation/Navbar'
import MobileSidebarOverlay from './components/navigation/MobileSidebarOverlay'
import MobileSidebarModal from './components/navigation/MobileSidebarModal'

import Home from './components/home-page/Home'
import SalesAlertNotification from './components/home-page/sales-alerts/SalesAlertNotification'
const App: FunctionComponent = () => {
  const [sidebar, setSidebar] = useState(false)

  const mobileSidebar = () => setSidebar(!sidebar)

  return (
    <div className='bg-gray-100'>
      {sidebar ? (
        <div className='transition'>
          <MobileSidebarOverlay mobileSidebar={mobileSidebar} />
          <MobileSidebarModal />
        </div>
      ) : (
        ''
      )}
      <Navbar mobileSidebar={mobileSidebar} />
      <SalesAlertNotification/>
      <Home/>
    </div>
  )
}

export default App
