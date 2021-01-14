import type { FunctionComponent } from 'react'
import {useEffect, useState} from 'react'
import ProductCard from '../home-products/ProductCard'
import {CategoryProduct} from '../../interfaces/reduxStoreInterfaces'
import { useParams } from 'react-router'
interface Param {
    category: string
}

const ShopCardList: FunctionComponent = () => {

    const [categoryState, setCategoryState] = useState([])

    const { category } = useParams<Param>()

    useEffect(() => {

        const fetchCategories = async (category: string) => {
          const res = await fetch(
            `http://localhost:5000/api/products/${category}`
          )

            const data = await res.json()
            
            setCategoryState(data)
            
        }

        fetchCategories(category)
    },[category])
    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {categoryState.map(((item: CategoryProduct) => <ProductCard key={item._id} {...item}/>) )}
        </div>
    )
}

export default ShopCardList
