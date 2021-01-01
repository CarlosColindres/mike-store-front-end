import type {FunctionComponent} from 'react'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {ReduxStoreInterface} from '../../interfaces/reduxStoreInterfaces'
const Checkout: FunctionComponent = () => {
    const { cartLength } = useSelector((state: ReduxStoreInterface) => state.cart)
    const { push } = useHistory()
    if (cartLength === 0) {
        push('/shop')
    }
    return (
      <div className='mt-8 container max-w-screen-2xl mx-auto px-4 '>
            <h1 className='text-2xl'>Checkout</h1>
            <div>
            </div>
      </div>
    )
}

export default Checkout
