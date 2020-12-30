import type { FunctionComponent } from 'react'
import {useState} from 'react'

interface LoginProps {
  openRegisterModal: () => void
}

const Register: FunctionComponent<LoginProps> = ({ openRegisterModal }) => {
  return (
    <div className='bg-gray-100 relative flex flex-col justify-center items-center px-10 rounded-lg register-modal'>
      <div
        onClick={openRegisterModal}
        className='absolute text-2xl top-3 right-5 cursor-pointer'>
        <i className='fas fa-times'></i>
      </div>
      <div className='text-center mb-8 '>
        <h2 className='font-semibold text-3xl mb-2'>BECOME A NIKE MEMBER</h2>
        <p className='text-left'>
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
      </div>
      <form className='flex flex-col w-full'>
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='email'
          name='email'
          placeholder='Email address'
        />
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='password'
          name='password'
          placeholder='Password'
        />
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='text'
          name='firstname'
          placeholder='First Name'
        />
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='text'
          name='lastname'
          placeholder='Last Name'
        />
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='date'
          name='birthdate'
          placeholder='Date of birth'
        />
        <p className='text-sm my-1'>
          By creating an account, you agree to Nike's Privacy Policy and Terms
          of Use.
        </p>
        <button className='bg-black rounded-full text-white my-4 py-4 w-full'>
          Join Us
        </button>
      </form>
      <p>
        Already a member?
        <span className='cursor-pointer underline'> Sign In.</span>
      </p>
    </div>
  )
}

export default Register
