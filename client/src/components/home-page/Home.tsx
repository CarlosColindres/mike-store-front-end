import type {FunctionComponent} from 'react'
import CategoryList from './categories/CategoryList'
import HeroImage from './hero-section/HeroImage'
import { homepage } from './../../data/homepage'
import ProductCardList from './home-products/ProductCardList'

const Home: FunctionComponent = () => {
  const {new_categories, trending} = homepage
    return (
      <div className='bg-gray-100'>
        <HeroImage />
        <CategoryList
          title='New from Nike Basketball'
          categories={new_categories}
        />
        <ProductCardList/>
        <CategoryList title='Trending Now' categories={trending} />
      </div>
    )
}

export default Home
