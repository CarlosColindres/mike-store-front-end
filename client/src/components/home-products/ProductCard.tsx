import type { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
interface Props {
  name: string
  img: string
  price: string
  category: string
  id: number
}

const ProductCard: FunctionComponent<Props> = ({
  name,
  img,
  price,
  category,
  id,
}) => {
  const { push } = useHistory()

  return (
    <div onClick={() => push(`/product/${id}`)} className=' bg-white'>
      <img
        className='w-full object-cover cursor-pointer'
        src={img}
        alt={name}
      />
      <div className='p-4 flex justify-between'>
        <div className='text-left'>
          <h2 className='text-lg'>{name}</h2>
          <p className='text-gray-500'>{category}</p>
        </div>
        <div className='w-12 p-2'>
          <p className='text-lg'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard