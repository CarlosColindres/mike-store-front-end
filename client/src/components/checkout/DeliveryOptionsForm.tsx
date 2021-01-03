import type { FunctionComponent } from 'react'

const DeliveryOptionsForm: FunctionComponent = () => {
  return (
    <div className='px-4'>
      <form>
        <div className='sm:flex sm:justify-between mb-4'>
          <input
            className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width sm:mr-2 mb-4 sm:mb-0'
            type='text'
            name='firstname'
            placeholder='First Name'
          />
          <input
            className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width'
            type='text'
            name='lastname'
            placeholder='Last Name'
          />
        </div>
        <div>
          <input
            className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full mb-4'
            type='text'
            name='address'
            placeholder='Address'
          />
          <div className='sm:flex sm:justify-between mb-4'>
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full w-32-percent mb-4 sm:mb-0'
              type='text'
              name='city'
              placeholder='City'
            />
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full w-32-percent mb-4 sm:mb-0'
              type='text'
              name='state'
              placeholder='State'
            />
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full w-32-percent mb-4 sm:mb-0'
              type='text'
              name='state'
              placeholder='Postal Code'
            />
          </div>
          <div className='sm:flex sm:justify-between mb-4'>
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width sm:mr-2 mb-4 sm:mb-0'
              type='email'
              name='email'
              placeholder='Email'
            />
            <input
              className='block bg-gray-100 border-t border-b border-l border-r border-black rounded-sm p-2 w-full width'
              type='tel'
              name='phonenumber'
              placeholder='Phone Number'
            />
          </div>
        </div>
          </form>
          <button className='bg-black text-white py-2 px-6 rounded-sm'>Continue</button>
    </div>
  )
}

export default DeliveryOptionsForm
