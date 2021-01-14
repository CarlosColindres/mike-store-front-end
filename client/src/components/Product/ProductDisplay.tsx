import type { FunctionComponent } from 'react'
import ProductDisplayImages from './ProductDisplayImages'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

interface DisplayImages {
  displayImages: string[]
}

const ProductDisplay: FunctionComponent<DisplayImages> = ({
  displayImages,
}) => {
  return (
    <Carousel
      swipeable={true}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
      renderThumbs={() =>
        displayImages.map((image, idx) => (
          <img key={idx} src={image} alt='nike shoe' />
        ))
      }>
      {displayImages.map((image, idx) => (
        <ProductDisplayImages key={idx} image={image} />
      ))}
    </Carousel>
  )
}

export default ProductDisplay
