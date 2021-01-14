import type { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import {removeFromCart} from '../../redux/actions/cartStateActions'
import type {ProductCart} from '../../interfaces/reduxStoreInterfaces'
const CartProduct: FunctionComponent<ProductCart> = ({ id, category, image, price, name, quantity, size }) => {

  const dispatch = useDispatch()
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='w-5/12 max-w-xs py-6'>
            <img className='w-full' src={image} alt={name} />
          </div>
          <div className='p-6'>
            <h2>KD13</h2>
            <p className='text-gray-500'>{category}</p>
            <p className='text-gray-500'>Size: {size}</p>
            <p className='text-gray-500 mb-1'>Quantity: {quantity}</p>
            <button
              onClick={() =>
                dispatch(
                  removeFromCart({
                    id,
                    category,
                    image,
                    price,
                    name,
                    quantity,
                    size,
                  })
                )
              }
              className='bg-black rounded-lg text-white py-1 px-6'>
              Remove
            </button>
          </div>
        </div>
        <div className='py-6'>
          <p>${price}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default CartProduct
