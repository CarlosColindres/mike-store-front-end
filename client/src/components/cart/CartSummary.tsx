import type { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { ReduxStoreInterface } from '../../interfaces/reduxStoreInterfaces'
import {useHistory} from 'react-router-dom'
const CartSummary: FunctionComponent = () => {
  const { subtotal, shipping, tax, total,cartLength } = useSelector((state: ReduxStoreInterface) => state.cart)
  const { push } = useHistory()
  const isCartEmpty = (cartSize: number) => {
    if (cartSize=== 0) {
      return true
    }
    return false
  }
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
        <button disabled={isCartEmpty(cartLength)} onClick={() => push('/checkout')} className={`${isCartEmpty(cartLength) ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'} rounded-full text-white mt-6 py-4 w-full`}>
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
