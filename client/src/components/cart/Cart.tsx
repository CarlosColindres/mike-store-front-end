import type { FunctionComponent } from 'react'
import ProductCardList from '../home-page/home-products/ProductCardList'
import SuggestionsCarousel from './cart-carousel/SuggestionsCarousel'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'
import IsMember from './IsMember'

const Cart: FunctionComponent = () => {
  return (
    <div className='mt-8 container max-w-screen-2xl mx-auto px-4 '>
      <div className='md:flex md:justify-between'>
        <div className='md:w-7/12'>
          <IsMember />
          <h2 className='text-center text-2xl my-8'>Bag</h2>
          <hr />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className='md:w-4/12'>
          <CartSummary />
        </div>
      </div>
      <h2 className='my-8 text-2xl'>You may also like</h2>
      <div className='sm:hidden'>
        <SuggestionsCarousel />
      </div>
      <div className='hidden sm:block'>
        <ProductCardList/>
      </div>
    </div>
  )
}

export default Cart
