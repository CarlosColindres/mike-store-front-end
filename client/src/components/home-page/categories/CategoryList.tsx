import type {FunctionComponent} from 'react'
import {homepage} from '../../../data/homepage'
import CategoryCard from './CategoryCard'
const CategoryList: FunctionComponent = () => {
    const { new_categories } = homepage
    
    return (
        <div className='md:flex'>
            {new_categories.map((item, idx) => <CategoryCard key={idx} {...item}/> )}
        </div>
    )
}

export default CategoryList
