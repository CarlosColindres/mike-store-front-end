import type { FunctionComponent as FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ProductCard from '../home-products/ProductCard'
import { homepage } from '../../interfaces/data/homepage'
const SuggestionsCarousel: FC = () => {
  return (
    <Carousel
      swipeable={true}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
      showThumbs={false}
    >
      
      {homepage.new_products.map(item => (
        <ProductCard
          {...item}
          key={item.id}
        />
      ))}
    </Carousel>
  )
}

export default SuggestionsCarousel
