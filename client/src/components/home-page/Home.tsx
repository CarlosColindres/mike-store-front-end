import type {FunctionComponent} from 'react'
import CategoryList from './categories/CategoryList'
import HeroImage from './hero-section/HeroImage'
import { homepage } from '../../interfaces/data/homepage'
import ProductCardList from '../home-products/ProductCardList'
import SalesAlertNotification from '../sales-alerts/SalesAlertNotification'
import NewProductCarousel from '../home-products/ProductCarousel'
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
        <div className='hidden sm:block'>
          <ProductCardList />
        </div>
        <div className='sm:hidden px-4'>
          <NewProductCarousel />
        </div>
        <CategoryList title='Trending Now' categories={trending} />
      </div>
    )
}

export default Home
