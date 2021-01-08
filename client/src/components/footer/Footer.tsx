import type { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import {ReduxStoreInterface} from '../../interfaces/reduxStoreInterfaces'
const Footer: FunctionComponent = () => {
    const {cart} = useSelector((state: ReduxStoreInterface) => state.cart)
    return (
        <div>
            footer   
        </div>
    )
}

export default Footer
