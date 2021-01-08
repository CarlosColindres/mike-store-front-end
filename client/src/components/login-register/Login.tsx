import type { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { FormhandlerHook } from '../../hooks/formhandlerHook'
//actions
import { toggleLoginModal } from '../../redux/actions/modalStateActions'

const initialState = {
  email: '',
  password: '',
}

const Login: FunctionComponent = () => {
  const [loginForm, setLoginForm, onChange] = FormhandlerHook(initialState)

  const onSubmit = (e: any) => {
    e.preventDefault()
    const userLogin = {
      email: loginForm.email,
      password: loginForm.password,
    }

    console.log(userLogin)
    setLoginForm(initialState)
  }

  console.log(loginForm.email)
  const dispatch = useDispatch()
  return (
    <div className='bg-gray-100 relative flex flex-col justify-center items-center px-10 rounded-lg modal'>
      <div
        onClick={() => dispatch(toggleLoginModal())}
        className='absolute text-2xl top-3 right-5 cursor-pointer'>
        <i className='fas fa-times'></i>
      </div>
      <div className='text-center font-semibold text-3xl mb-8 '>
        <h2>YOUR ACCOUNT FOR</h2>
        <h2>EVERYTHING NIKE</h2>
      </div>
      <form className='flex flex-col w-full' onSubmit={onSubmit}>
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='email'
          name='email'
          value={loginForm.email}
          onChange={onChange}
          placeholder='Email address'
        />
        <input
          className='border-t border-r border-b border-l border-gray-400 rounded-md overflow-hidden border-solid w-full py-2 px-1 mb-4'
          type='password'
          name='password'
          value={loginForm.password}
          onChange={onChange}
          placeholder='Password'
        />
        {/* <label className='flex items-center'>
          <input type='checkbox' name='saveSigning' />
          <span className='ml-3 text-gray-600'>Keep me signed in</span>
  </label>*/}
        <p className='text-sm my-1'>
          By logging in, you agree to Nike's Privacy Policy and Terms of Use.
        </p>
        <button
          type='submit'
          className='bg-black rounded-full text-white my-4 py-4 w-full'>
          Log In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='cursor-pointer underline'> Join Us.</span>
      </p>
    </div>
  )
}

export default Login
