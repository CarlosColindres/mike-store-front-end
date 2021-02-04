import type { FunctionComponent } from 'react'

interface Product {
  _id?: string
  category?: string
  image: string
  price: number
  name: string
  quantity: string
  size: string
}
const SummaryCard: FunctionComponent<Product> = ({name, image, price,size,quantity}) => {
  return (
    <div>
      <hr />
      <div className='flex py-4'>
        <div className='w-24'>
          <img
            className='w-full object-cover'
            src={image}
            alt='KD13'
          />
        </div>
        <div className='ml-4 text-gray-500'>
          <h3 className='text-lg text-black'>{ name}</h3>
          <p>Size: { size}</p>
          <p>{ quantity}</p>
          <p>${ price}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SummaryCard
