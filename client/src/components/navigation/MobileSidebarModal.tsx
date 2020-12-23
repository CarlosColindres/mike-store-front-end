import type { FunctionComponent } from 'react'

const MobileSidebarModal: FunctionComponent = () => {
  return (
    <div className='fixed h-screen w-9/12 px-4 pt-8 bg-white z-10 left-1/4 '>
      <nav className='flex flex-col text-3xl mb-12'>
        <a className='mb-2' href='/shop'>
          New Realeases
        </a>
        <a className='mb-2' href='/shop'>
          Men
        </a>
        <a className='mb-2' href='/shop'>
          Women
        </a>
        <a className='' href='/shop'>
          Kids
        </a>
      </nav>
      <p className='text-lg mb-8'>
        Become a Nike Member for the best products, inspiration and stories in
        sport
      </p>
      <div className='mb-8'>
        <a
          className='px-6 py-2 bg-black text-white text-lg rounded-full border-solid border-black border-2'
          href='/login'>
          Join us
        </a>
        <a
          className='px-6 py-2 bg-white text-black text-lg rounded-full border-solid border-black border-2 ml-4'
          href='/signup'>
          Sign In
        </a>
      </div>
      <div>
        <div className='w-12 rounded-full p-2 cursor-pointer hover:bg-gray-200'>
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
            2
          </span>
        </div>
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
              d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebarModal
