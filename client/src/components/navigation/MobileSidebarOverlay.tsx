import type { FunctionComponent } from 'react'

interface Props {
  mobileSidebar?: () => void
  registration?: () => void
}

const MobileSidebarOverlay: FunctionComponent<Props> = ({
  mobileSidebar,
  registration,
}) => {
  return (
    <div
      onClick={() => {
        if (mobileSidebar) {
          mobileSidebar()
        } else if (registration) {
          registration()
        }
      }}
      className='fixed h-screen w-screen blur'></div>
  )
}

export default MobileSidebarOverlay
