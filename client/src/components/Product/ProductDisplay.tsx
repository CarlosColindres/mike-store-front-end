import type { FunctionComponent } from 'react'
import ProductDisplayImages from './ProductDisplayImages'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
const ProductDisplay: FunctionComponent = () => {
  const images = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/fb977a7b-9afb-4e85-bc73-0606c0e5a29c/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/796061fe-66d5-4130-821c-3732454868f8/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/3ea7a9fc-2f19-448b-bc7d-30d9993fea55/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/baa6afa0-7b40-46ac-8e79-0ed0beecdbf1/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg',
  ]
  return (
    <Carousel
      swipeable={true}
      infiniteLoop={true}
      autoPlay={true}
          emulateTouch={true}
          renderThumbs={() => images.map((image, idx) => <img key={idx} src={ image} alt='nike shoe'/>)}
      >
          {images.map((image, idx) => <ProductDisplayImages key={idx} image= {image}/>)}
    </Carousel>
  )
}

export default ProductDisplay
