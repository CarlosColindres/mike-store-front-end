import type {FunctionComponent} from 'react'
import {homepage} from './../../../data/homepage'
import ProductCard from './ProductCard'
const ProductCardList: FunctionComponent = () => {

    const { new_products } = homepage
    return (
      <section className='container max-w-screen-2xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 mb-8'>
        {new_products.map(item => (
          <ProductCard
            category={item.category}
            name={item.name}
            price={item.price}
            img={item.img}
            key={item.id}
          />
        ))}
      </section>
    )
}

export default ProductCardList
