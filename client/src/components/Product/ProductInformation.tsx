import type { FunctionComponent } from 'react'

import { useState } from 'react'
import { useDispatch} from 'react-redux'

//actions
import { addToCart } from '../../redux/actions/cartStateActions'

interface Product {
  description: string
  category: string
  price: number
  _id: string
  image: string
  name: string
  displayImages: string[]
  stock: number
}
const ProductInformation: FunctionComponent<Product> = ({
  description,
  category,
  price,
  _id,
  name,
  image,
}) => {
  const dispatch = useDispatch()

  const [shoesize, setShoesize] = useState('')
  const onChange = (e: any) => {
    const { value } = e.target
    setShoesize(value)
  }

  return (
    <div className='md:w-5/12'>
      <p className='text-gray-500'>{category.toUpperCase()} SHOE</p>
      <p className='text-lg my-1'>${price}</p>
      <label className='text-lg my-1'>Choose your size :</label>
      <select onChange={onChange} name='shoesize'>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              category,
              price,
              _id,
              image,
              name,
              size: shoesize,
              quantity: '1',
            })
          )
        }
        className='bg-black rounded-full text-white my-6 py-4 w-full'>
        Add To Bag
      </button>
      <p>{description}</p>

      <p className='font-semibold'>Style: CI9923-001</p>
      <hr className='my-4' />
      <h2 className='text-2xl my-4'>Fit</h2>
      <p>
        Snug fit. If you prefer a slightly looser fit we recommend ordering a
        half-size up.
      </p>
      <hr className='my-4' />
      <h2 className='text-2xl my-4'>Free Shipping & Returns</h2>
      <p>
        Free standard shipping and free 60-day returns for Nike Members. Learn
        more. Return policy exclusions apply.
      </p>
      <hr className='my-4' />
    </div>
  )
}

export default ProductInformation
