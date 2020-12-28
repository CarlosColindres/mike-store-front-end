import type { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  mobileSidebar: () => void
  openLoginModal: () => void
}

export const Navbar: FunctionComponent <Props> = ({mobileSidebar, openLoginModal}) => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container max-w-screen-2xl mx-auto px-4 justify-between flex'>
        <div>
          <Link to='/'>
            <svg height='60px' width='60px' fill='#111' viewBox='0 0 69 32'>
              <path d='M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z'></path>
            </svg>
          </Link>
        </div>
        <nav className='hidden md:flex items-center text-lg'>
          <a href='/shop'>New Realeases</a>
          <a className='ml-4' href='/shop'>
            Men
          </a>
          <a className='ml-4' href='/shop'>
            Women
          </a>
          <button className='ml-4'>
            Join Us
          </button>
          <button onClick={openLoginModal} className='ml-4'>
            Sign In <i className='fas fa-sign-in-alt'></i>
          </button>
        </nav>
        <nav className='flex items-center'>
          <div className='w-12 rounded-full p-2 cursor-pointer hover:bg-gray-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                strokeWidth={1.5}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          <div className='w-12 rounded-full p-2 ml-1 cursor-pointer hover:bg-gray-200'>
            <Link to='/cart'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
              <span className='absolute -mt-5 ml-3 text-xs text-black font-bold'>
                1
              </span>
            </Link>
          </div>
          <div
            onClick={mobileSidebar}
            className='w-12 rounded-full p-2 ml-1 cursor-pointer hover:bg-gray-200 md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  )
}
