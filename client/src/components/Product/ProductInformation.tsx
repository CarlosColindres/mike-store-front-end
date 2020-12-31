import type {FunctionComponent} from 'react'

const ProductInformation: FunctionComponent = () => {
    return (
      <div className='md:w-5/12'>
        <p className='text-gray-500'>Men's Running Shoe</p>
        <p className='text-lg my-1'>$200</p>
        <label className='text-lg my-1'>Choose your size :</label>
        <select name='shoesize'>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <button className='bg-black rounded-full text-white my-6 py-4 w-full'>
          Add To Bag
        </button>
        <p>
          The Nike Air Zoom Tempo NEXT% mixes durability with a design that
          helps push you towards your personal best. The result is a shoe built
          like a racer, but made for your everyday training routine.
        </p>
        <p className='font-semibold mt-1'>Shown: Black/Volt/White</p>
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
