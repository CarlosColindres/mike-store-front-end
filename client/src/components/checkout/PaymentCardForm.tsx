import type { FunctionComponent } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const billing = {
    address: {
    line1: '1234 sw 12 st',
    city: 'Miami',
    state: 'FL',
    postal_code: '12345'
    },
    name: 'Carlos Colindres',
    email: 'stingaree43@gmail.com',
    phone: '1234567890'
    
}

const PaymentCardForm: FunctionComponent = () => {
  const stripe = useStripe()
  const elements = useElements()
  const onSubmit = async (e: any) => {
      e.preventDefault()
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
        card: elements?.getElement(CardElement)!,
        billing_details: billing
    })

    if (!error) {
      console.log(paymentMethod)
    }
  }
  return (
    <form className='px-4' onSubmit={onSubmit}>
      <CardElement />
      <button
        className='bg-black text-white py-2 px-6 rounded-sm mt-4'
        type='submit'
        disabled={!stripe}>
        Continue
      </button>
    </form>
  )
}

export default PaymentCardForm
