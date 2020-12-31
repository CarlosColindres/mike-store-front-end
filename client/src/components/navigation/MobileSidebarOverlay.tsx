import type { FunctionComponent } from 'react'
import {useDispatch} from 'react-redux'

//actions
import {toggleSidebar} from '../../redux/actions/modalStateActions'

const MobileSidebarOverlay: FunctionComponent = () => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch(toggleSidebar())}
      className='fixed h-screen w-screen blur'></div>
  )
}

export default MobileSidebarOverlay
