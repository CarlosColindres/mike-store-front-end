import type { FunctionComponent } from 'react'

const Register: FunctionComponent = () => {
  return (
    <div className='max-w-lg'>
      <div className='text-center font-semibold text-3xl mb-8'>
        <h2>YOUR ACCOUNT FOR</h2>
        <h2>EVERYTHING NIKE</h2>
      </div>
      <form className='flex flex-col w-full'>
        <input
          className='border-t border-r border-b border-l border-gray-300 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='email'
          name='email'
          placeholder='Email address'
        />
        <input
          className='border-t border-r border-b border-l border-gray-300 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='password'
          name='password'
          placeholder='Password'
        />
        <input type='checkbox' name='saveSigning' />
      </form>
    </div>
  )
}

export default Register
