import type {FunctionComponent} from 'react'
import {homepage} from '../../interfaces/data/homepage'
import ProductCard from './ProductCard'
const ProductCardList: FunctionComponent = () => {

    const { new_products } = homepage
    return (
      <section className='container max-w-screen-2xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 mb-8'>
      
      </section>
    )
}

export default ProductCardList