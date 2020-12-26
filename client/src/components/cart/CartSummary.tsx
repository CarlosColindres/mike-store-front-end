import type { FunctionComponent } from 'react'

const CartSummary: FunctionComponent = () => {
  return (
    <div>
      <h2 className=' text-xl font-medium mt-8 mb-4 md:mt-0'>Summary</h2>
      <div className='flex justify-between text-lg mb-1'>
        <p>Subtotal</p>
        <p>$240</p>
      </div>
      <div className='flex justify-between text-lg mb-1'>
        <p>Estimated Shipping & Handling</p>
        <p>$10</p>
      </div>
      <div className='flex justify-between text-lg mb-1'>
        <p>Estimated Tax</p>
        <p>$0</p>
      </div>
      <hr />
      <div className='flex justify-between text-lg'>
        <p>Total</p>
        <p className='font-bold'>$250</p>
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
