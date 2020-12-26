import type { FunctionComponent } from 'react'

const IsMember: FunctionComponent = () => {
    return (
      <div className='border-2 border-gray-300 border-solid px-1 py-4 mb-8'>
        <h2 className='text-lg text-red-500 font-semibold'>Free Shipping for Members.</h2>
        <p className='text-gray-500'>Become a Nike Member for fast and free shipping.</p>
      </div>
    )
}

export default IsMember
