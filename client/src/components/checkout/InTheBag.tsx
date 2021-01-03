import type {FunctionComponent} from 'react'

const InTheBag: FunctionComponent = () => {
    return (
      <div className='bg-gray-200 h-12 text-xl flex justify-between items-center px-4'>
        <h2>In Your Bag</h2>
        <i className='fas fa-caret-down'></i>
      </div>
    )
}

export default InTheBag
