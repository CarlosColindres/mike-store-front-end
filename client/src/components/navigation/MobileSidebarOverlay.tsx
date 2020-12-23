import type { FunctionComponent } from 'react'

interface Props {
  mobileSidebar: () => void
}

const MobileSidebarOverlay: FunctionComponent<Props> = ({mobileSidebar}) => {
  return <div onClick={mobileSidebar} className='absolute h-screen w-screen blur'>
    
  </div>
}

export default MobileSidebarOverlay
