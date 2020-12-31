import type {FunctionComponent} from 'react'
import ShopCardList from './ShopCardList'

const Shop: FunctionComponent = () => {
    return (
      <div className='container max-w-screen-2xl mx-auto px-4'>
        <h1 className='text-2xl my-8'>New Shoes</h1>
        <ShopCardList />
      </div>
    )
}

export default Shop
