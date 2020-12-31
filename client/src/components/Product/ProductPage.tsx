import type {FunctionComponent} from 'react'
import SuggestionsCarousel from '../cart/cart-carousel/SuggestionsCarousel'
import ProductCardList from '../home-page/home-products/ProductCardList'
import ProductDisplay from './ProductDisplay'
import ProductInformation from './ProductInformation'

const ProductPage: FunctionComponent = () => {
    return (
      <div className='container max-w-screen-2xl mx-auto px-4 mt-8'>
        <h1 className='text-3xl my-8'>Nike Air Zoom Tempo NEXT</h1>
        <div className='md:flex md:justify-between'>
          <div className='md:w-6/12'>
            <ProductDisplay />
          </div>

          <ProductInformation />
        </div>
        <h2 className='my-8 text-2xl'>You may also like</h2>
        <div className='sm:hidden'>
          <SuggestionsCarousel />
        </div>
        <div className='hidden sm:block'>
          <ProductCardList />
        </div>
      </div>
    )
}

export default ProductPage
