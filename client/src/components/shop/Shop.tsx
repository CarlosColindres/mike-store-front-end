import type {FunctionComponent} from 'react'
import ShopCardList from './ShopCardList'
import { useParams } from 'react-router'
interface Param {
  category: string
}
const Shop: FunctionComponent = () => {
  const { category } = useParams<Param>()
    return (
      <div className='container max-w-screen-2xl mx-auto px-4'>
        <h1 className='text-2xl my-8'>{ category.toUpperCase()} SHOES</h1>
        <ShopCardList />
      </div>
    )
}

export default Shop
