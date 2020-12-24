import type {FunctionComponent} from 'react'

interface Props {
    name: string
    img: string
    price: string
    category: string
}

const ProductCard: FunctionComponent<Props> = ({
  name,
  img,
  price,
  category,
}) => {
  return (
    <div className='bg-gray-200'>
      <img src={img} alt={name} />
      <div className='p-2 flex justify-between'>
        <div>
          <h2 className='text-lg'>{name}</h2>
          <p className='text-gray-500'>{category}</p>
          <p className='text-lg'>${price}</p>
        </div>
        <div className='w-12 rounded-full p-2 ml-1 cursor-pointer hover:bg-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
