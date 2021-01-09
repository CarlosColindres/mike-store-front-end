import type { FunctionComponent } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentCardForm from './PaymentCardForm'

const stripePromise = loadStripe(
  'pk_test_51I7kheDuSYlEpCGw3og6Vb9myP7uY6vhS1QrX5fxZlSqfUs7sZkD4AQsPb8t3FyNnB9jzd1kBnGIizEXOFhVsaep00arrZmArR'
)
const PaymentForm: FunctionComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCardForm />
    </Elements>
  )
}

export default PaymentForm
