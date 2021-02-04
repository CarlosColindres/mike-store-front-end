import type { FunctionComponent } from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const randomCategory = () => {
   return Math.random() > .5 ? 'men' : 'women'
 }

 const fetchCategories = async (category: string) => {
   const res = await fetch(
     `https://mikestore23.herokuapp.com/api/products/${category}`
   )

   const data = await res.json()

   return data
 }
const ProductCardList: FunctionComponent = () => {
const [homeCarousel, setHomeCarousel] = useState([])

useEffect(() => {
  fetchCategories(randomCategory()).then(res => {
    const slice = res.slice(0, 8)
    console.log(slice)
    setHomeCarousel(slice)
  })
}, [])
    return (
      <section className='container max-w-screen-2xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 mb-8'>
        {homeCarousel.map(item => (
          <ProductCard {...item} />
        ))}
      </section>
    )
}

export default ProductCardList