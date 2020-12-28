import type { FunctionComponent } from 'react'

const CartProduct: FunctionComponent = () => {

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='w-5/12 max-w-xs py-6'>
            <img
              className='w-full'
              src='https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/8ad4fb98-23ca-42b6-902b-a7e9451326d6/lebron-18-big-kids-basketball-shoe-3VWSb0.jpg'
              alt='shoes'
            />
          </div>
          <div className='p-6'>
            <h2>KD13</h2>
            <p className='text-gray-500'>Basketball Shoe</p>
            <p className='text-gray-500'>Size: 9</p>
            <p className='text-gray-500 mb-1'>Quantity: 1</p>
            <button className='bg-black rounded-lg text-white py-1 px-6'>
              Remove
            </button>
          </div>
        </div>
        <div className='py-6'>
          <p>$150</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default CartProduct
