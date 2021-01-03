import type { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ReduxStoreInterface } from '../../interfaces/reduxStoreInterfaces'
import DeliveryOptions from './DeliveryOptions'
import DeliveryOptionsForm from './DeliveryOptionsForm'
import InTheBag from './InTheBag'
import OrderReview from './OrderReview'
import Payment from './Payment'
import TotalSummary from './TotalSummary'
const Checkout: FunctionComponent = () => {
  const { cartLength } = useSelector((state: ReduxStoreInterface) => state.cart)
  const { push } = useHistory()
  if (cartLength === 0) {
    push('/shop')
  }
  return (
    <div className='mt-8 container max-w-screen-2xl mx-auto px-4'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl'>Checkout</h1>
        <p>1 item $150</p>
      </div>
      <div className='lg:flex lg:justify-between'>
        <div className='lg:order-2 width-33'>
          <InTheBag />
          <TotalSummary />
        </div>
        <div className='width-65'>
          <DeliveryOptions />
          <DeliveryOptionsForm />
          <Payment />
          <OrderReview />
        </div>
      </div>
    </div>
  )
}

export default Checkout
