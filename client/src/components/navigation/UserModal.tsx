import type { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const UserModal: FunctionComponent = () => {
  return (
    <div className=''>
      <nav>
              <Link to='/login'>
                  Login
              </Link>
      </nav>
    </div>
  )
}

export default UserModal
