import type { FunctionComponent } from 'react'
import CategoryCard from './CategoryCard'

interface Props {
  title: string
  categories: {
    title: string
    url: string
    urlTitle: string
    img: string
  }[]
}

const CategoryList: FunctionComponent<Props> = ({ title, categories }) => {
  return (
    <section className='container max-w-screen-2xl mx-auto px-4'>
      <h2 className='text-2xl font-semibold mb-6'>{title}</h2>
      <div className='sm:flex md:justify-between'>
        {categories.map((item, idx) => (
          <CategoryCard
            key={idx}
            title={item.title}
            url={item.url}
            urlTitle={item.urlTitle}
            img={item.img}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryList
