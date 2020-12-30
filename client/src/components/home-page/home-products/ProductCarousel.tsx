import type { FunctionComponent as FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ProductCard from './ProductCard'
import { homepage } from '../../../data/homepage'
const NewProductCarousel: FC = () => {
  return (
    <Carousel swipeable={true} infiniteLoop={true}>
      {homepage.new_products.map(item => (
        <ProductCard
          category={item.category}
          name={item.name}
          price={item.price}
          img={item.img}
          key={item.id}
        />
      ))}
    </Carousel>
  )
}

export default NewProductCarousel
