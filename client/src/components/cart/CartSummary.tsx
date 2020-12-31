import type { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { ReduxStoreInterface } from '../../interfaces/reduxStoreInterfaces'

const CartSummary: FunctionComponent = () => {
    const { subtotal, shipping, tax, total } = useSelector((state: ReduxStoreInterface) => state.cart)
  return (
    <div>
      <h2 className=' text-2xl mt-8 mb-4 md:mt-0'>Summary</h2>
      <div className='flex justify-between text-lg mb-1'>
        <p>Subtotal</p>
        <p>${ subtotal}</p>
      </div>
      <div className='flex justify-between text-lg mb-1'>
        <p>Estimated Shipping & Handling</p>
        <p>${ shipping}</p>
      </div>
      <div className='flex justify-between text-lg mb-1'>
        <p>Estimated Tax</p>
        <p>${ tax}</p>
      </div>
      <hr />
      <div className='flex justify-between text-lg'>
        <p>Total</p>
        <p className='font-bold'>${ total}</p>
      </div>
      <hr />
      <div>
        <button className='bg-black rounded-full text-white mt-6 py-4 w-full'>
          Checkout
        </button>
      </div>
      <div>
        <button className='bg-gray-300 rounded-full my-4 py-4 w-full font-bold'>
          <span className='text-blue-700'>Pay</span>
          <span className='text-blue-400'>Pal</span>
        </button>
      </div>
    </div>
  )
}

export default CartSummary
