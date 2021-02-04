import type {FunctionComponent} from 'react'
import CategoryList from './categories/CategoryList'
import HeroImage from './hero-section/HeroImage'
import { homepage } from '../../interfaces/data/homepage'
import ProductCardList from '../home-products/ProductCardList'
import SalesAlertNotification from '../sales-alerts/SalesAlertNotification'
const Home: FunctionComponent = () => {
  const {new_categories, trending} = homepage
    return (
      <div>
        <SalesAlertNotification />
        <HeroImage />
        <CategoryList
          title='New from Nike Basketball'
          categories={new_categories}
        />
        <h2 className='px-4 my-8 container max-w-screen-2xl mx-auto text-2xl'>
          Our new products
        </h2>
          <ProductCardList />
        <CategoryList title='Trending Now' categories={trending} />
      </div>
    )
}

export default Home
