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
    <div className='mb-8 md:width'>
      <div>
        <img className='object-cover' src={img} alt={title} />
      </div>
      <div className='-mt-24 ml-4'>
        <h2 className='mb-4 text-lg font-semibold'>{title}</h2>
        <a
          className='px-6 py-1 bg-black text-white text-lg rounded-full border-solid border-black border-2'
          href={url}>
          {urlTitle}
        </a>
      </div>
    </div>
  )
}

export default CategoryCard
