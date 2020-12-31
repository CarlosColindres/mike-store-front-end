import type {FunctionComponent} from 'react'

interface ProductImages {
    image: string
}

const ProductDisplayImages: FunctionComponent<ProductImages> = ({image}) => {
    return (
        <div>
            <img src={image} alt="img"/>
        </div>
    )
}

export default ProductDisplayImages
