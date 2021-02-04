import type { FunctionComponent } from 'react'
import ProductCardList from '../home-products/ProductCardList'
import ProductDisplay from './ProductDisplay'
import ProductInformation from './ProductInformation'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
interface Param {
  id: string
}

interface Product {
  _id: string
  name: string
  image: string
  displayImages: string[]
  price: number
  shoeSize: number[]
  stock: number
  description: string
  category: string
}

const initialState = {
  _id: '',
  name: '',
  image: '',
  displayImages: [],
  price: 0,
  shoeSize: [],
  stock: 0,
  description: '',
  category: '',
}

const ProductPage: FunctionComponent = () => {
  const [product, setProduct] = useState<Product>(initialState)

  const { id } = useParams<Param>()

  useEffect(() => {
    const fetchProduct = async (id: string) => {
      const res = await fetch(
        `https://mikestore23.herokuapp.com/api/products/shoe/${id}`
      )

      const data = await res.json()

      setProduct(data)
    }

    fetchProduct(id)
  }, [id])
  console.log(product)
  return (
    <div className='container max-w-screen-2xl mx-auto px-4 mt-8'>
      <h1 className='text-3xl my-8'>{product.name}</h1>
      <div className='md:flex md:justify-between'>
        <div className='md:w-6/12'>
          <ProductDisplay displayImages={product.displayImages} />
        </div>

        <ProductInformation
          {...product}
        />
      </div>
      <h2 className='my-8 text-2xl'>You may also like</h2>
        <ProductCardList />
    </div>
  )
}

export default ProductPage
