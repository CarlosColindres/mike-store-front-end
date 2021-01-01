import type { FunctionComponent } from 'react'
import {useSelector} from 'react-redux'
import {ReduxStoreInterface} from '../../interfaces/reduxStoreInterfaces'
//components
import ProductCardList from '../home-products/ProductCardList'
import SuggestionsCarousel from './SuggestionsCarousel'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'
import IsMember from './IsMember'

const Cart: FunctionComponent = () => {
  const { cart, cartLength } = useSelector((state: ReduxStoreInterface) => state.cart)
  return (
    <div className='mt-8 container max-w-screen-2xl mx-auto px-4 '>
      <div className='md:flex md:justify-between'>
        <div className='md:w-7/12'>
          <IsMember />
          <h2 className='text-center text-2xl my-8'>Bag</h2>
          <hr />
          {cartLength === 0 && (
            <p className='text-lg mt-4'>There are no items in your bag</p>
          )}
          {cart.map(item => (
            <CartProduct {...item} />
          ))}
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
        <ProductCardList />
      </div>
    </div>
  )
}

export default Cart
