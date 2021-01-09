import type { FunctionComponent } from 'react'
import { FormhandlerHook } from '../../hooks/formhandlerHook'

const initialState = {
  firstname: '',
  lastname: '',
  address: '',
  city: '',
  state: '',
  postalcode: '',
  email: '',
  phonenumber: ''
}

const localStorageValues = localStorage.getItem('deliveryForm')

const stateToUse = localStorageValues ? JSON.parse(localStorageValues) : initialState

const DeliveryOptionsForm: FunctionComponent = () => {
  
  const [deliveryForm, setDeliveryForm, onChange] = FormhandlerHook(stateToUse)
  const handleSubmit = (e: any) => {
    e.preventvalue()
    setDeliveryForm(stateToUse)
  }
  return (
    <div className='px-4'>
      <form onSubmit={handleSubmit}>
        <div className='sm:flex sm:justify-between mb-4'>
          <input
            className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width sm:mr-2 mb-4 sm:mb-0'
            type='text'
            name='firstname'
            placeholder='First Name'
            value={deliveryForm.firstname}
            onChange={onChange}
          />
          <input
            className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width'
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={deliveryForm.lastname}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full mb-4'
            type='text'
            name='address'
            placeholder='Address'
            value={deliveryForm.address}
            onChange={onChange}
          />
          <div className='sm:flex sm:justify-between mb-4'>
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full w-32-percent mb-4 sm:mb-0'
              type='text'
              name='city'
              placeholder='City'
              value={deliveryForm.city}
              onChange={onChange}
            />
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full w-32-percent mb-4 sm:mb-0'
              type='text'
              name='state'
              placeholder='State'
              value={deliveryForm.state}
              onChange={onChange}
            />
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full w-32-percent mb-4 sm:mb-0'
              type='text'
              name='postalcode'
              placeholder='Postal Code'
              value={deliveryForm.postalcode}
              onChange={onChange}
            />
          </div>
          <div className='sm:flex sm:justify-between mb-4'>
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width sm:mr-2 mb-4 sm:mb-0'
              type='email'
              name='email'
              placeholder='Email'
              value={deliveryForm.email}
              onChange={onChange}
            />
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width'
              type='tel'
              name='phonenumber'
              placeholder='Phone Number'
              value={deliveryForm.phonenumber}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
      <button className='bg-black text-white py-2 px-6 rounded-sm'>
        Continue
      </button>
    </div>
  )
}

export default DeliveryOptionsForm
