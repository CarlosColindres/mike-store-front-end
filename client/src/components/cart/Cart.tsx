import type { FunctionComponent } from 'react'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'
import IsMember from './IsMember'

const Cart: FunctionComponent = () => {
  return (
    <div className='mt-8 container max-w-screen-2xl mx-auto px-4 md:flex md:justify-between'>
      <div className='md:w-7/12'>
        <IsMember />
        <h2 className='text-center text-xl font-medium my-8'>Bag</h2>
        <hr />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className='md:w-4/12'>
        <CartSummary />
      </div>
    </div>
  )
}

export default Cart
