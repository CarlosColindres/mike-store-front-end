import type { FunctionComponent } from 'react'

interface Props {
  title: string
  url: string
  urlTitle: string
  img: string
}

const CategoryCard: FunctionComponent<Props> = ({
  title,
  url,
  urlTitle,
  img,
}) => {
  return (
    <div className='mb-8 width relative'>
      <div className=''>
        <img className='object-cover relative' src={img} alt={title} />
      </div>
      <div className='absolute bottom-6 left-4 w-full'>
        <h2 className='mb-4 text-xl text-white font-semibold'>{title}</h2>
        <a
          className='px-6 py-1 bg-white text-black text-lg rounded-full font-semibold'
          href={url}>
          {urlTitle}
        </a>
      </div>
    </div>
  )
}

export default CategoryCard
