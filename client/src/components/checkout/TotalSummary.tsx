import type {FunctionComponent} from 'react'
import SummaryCard from './SummaryCard'

const TotalSummary: FunctionComponent = () => {
    return (
      <div className='px-4 mt-4 lg:flex lg:flex-col'>
        <SummaryCard />
        <div className='mt-4 lg:order-first'>
          <div className='flex justify-between text-lg mb-1'>
            <p>Subtotal</p>
            <p>$150</p>
          </div>
          <div className='flex justify-between text-lg mb-1'>
            <p>Estimated Shipping & Handling</p>
            <p>$0</p>
          </div>
          <div className='flex justify-between text-lg mb-1'>
            <p>Estimated Tax</p>
            <p>$0</p>
          </div>
          <hr />
          <div className='flex justify-between text-lg'>
            <p>Total</p>
            <p className='font-bold'>$150</p>
          </div>
        </div>
      </div>
    )
}

export default TotalSummary
