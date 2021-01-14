import type { FunctionComponent } from 'react'
import { useHistory, Link } from 'react-router-dom'
interface Props {
  name: string
  image: string
  price: number
  category: string
  _id: number
}

const ProductCard: FunctionComponent<Props> = ({
  name,
  image,
  price,
  category,
  _id,
}) => {
  const { push } = useHistory()

  return (
    <div className=' bg-white overflow-hidden'>
      <img
        onClick={() => push(`/product/${_id}`)}
        className='w-full object-cover cursor-pointer transform duration-500
         hover:scale-105'
        src={image}
        alt={name}
      />
      <div className='p-4 flex justify-between'>
        <div className='text-left'>
          <Link to={`/product/${_id}`} className='text-xl'>{name}</Link>
          <p className='text-gray-500 text-md'>{category.toUpperCase()} SHOES</p>
          <p className='text-lg'>${price}</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductCard
