import type { FunctionComponent as FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ProductCard from './ProductCard'
import { homepage } from '../../interfaces/data/homepage'
const NewProductCarousel: FC = () => {
  return (
    <Carousel
      swipeable={true}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
      showThumbs={false}></Carousel>
  )
}

export default NewProductCarousel
