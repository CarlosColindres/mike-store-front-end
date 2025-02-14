import type { FunctionComponent } from 'react'
import { homepage } from '../../../interfaces/data/homepage'
import { useEffect, useState } from 'react'

const HeroImage: FunctionComponent = () => {
  const [windowWidthSize, setwindowWidthSize] = useState(window.outerWidth)

  const { hero } = homepage

  const windowSize = () => setwindowWidthSize(window.outerWidth)
  useEffect(() => {
    window.addEventListener('resize', windowSize)

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <section className='px-4 mb-8 container max-w-screen-2xl mx-auto sm:text-white sm:relative'>
        <img
          className='w-full object-center'
          src={windowWidthSize <= 640 ?hero.img_mobile : hero.img}
          alt=''
        />
     
      <div className='sm:absolute sm:bottom-4 sm:left-10'>
        <h1 className='text-4xl font-bold'>{hero.title}</h1>
        <sub className='text-lg'>{hero.subtext}</sub>
        <div className='mt-2 py-4'>
          <a
            className='px-6 py-1 bg-black sm:bg-white text-white sm:text-black text-lg rounded-full border-solid border-black border-2'
            href={hero.url}>
            {hero.urlTitle}
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroImage
