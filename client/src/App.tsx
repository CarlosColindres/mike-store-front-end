import { useState } from 'react'
import type { FunctionComponent } from 'react'
import { Navbar } from './components/navigation/Navbar'
import MobileSidebarOverlay from './components/navigation/MobileSidebarOverlay'
import MobileSidebarModal from './components/navigation/MobileSidebarModal'

import Home from './components/home-page/categories/Home'
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
      <Home/>
    </div>
  )
}

export default App
