import type { FunctionComponent } from 'react'

const SummaryCard: FunctionComponent = () => {
  return (
    <div>
      <hr />
      <div className='flex py-4'>
        <div className='w-24'>
          <img
            className='w-full object-cover'
            src='https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/c355709a-660c-4ce9-a926-3e26c7ca944a/kd13-basketball-shoe-H6g10w.jpg'
            alt='KD13'
          />
        </div>
        <div className='ml-4 text-gray-500'>
          <h3 className='text-lg text-black'>KD13</h3>
          <p>Size: 9 </p>
          <p>Quantity: 1</p>
          <p>$150</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SummaryCard
