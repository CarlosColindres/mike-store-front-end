import type { FunctionComponent} from 'react'
import {homepage} from '../../data/homepage'
import ProductCard from '../home-page/home-products/ProductCard'
const ShopCardList: FunctionComponent = () => {
    const {products} = homepage
    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {products.map(item => <ProductCard {...item}/>)}
        </div>
    )
}

export default ShopCardList
