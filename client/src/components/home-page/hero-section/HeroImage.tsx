import type { FunctionComponent } from 'react'
import { homepage } from '../../../data/homepage'
import {useEffect, useState} from 'react'

const HeroImage: FunctionComponent = () => {

    const [windowWidthSize, setwindowWidthSize] = useState(window.outerWidth)

    const { hero } = homepage

    const windowSize = () => setwindowWidthSize( window.outerWidth)

    useEffect(() => {
        window.addEventListener('resize', windowSize)
        return () => {
            window.removeEventListener('resize', windowSize)
        }
    }, [])

    return (
      <div className='px-4 mb-8 container max-w-screen-2xl mx-auto'>
        {windowWidthSize <= 640 ? (
          <img className='w-full object-center' src={hero.img_mobile} alt='' />
        ) : (
          <img className='w-full' src={hero.img} alt='' />
        )}
        <div>
          <h1 className='text-4xl font-bold'>{hero.title}</h1>
          <sub className='text-lg'>{hero.subtext}</sub>
          <div className='mt-2 py-4'>
            <a
              className='px-6 py-1 bg-black text-white text-lg rounded-full border-solid border-black border-2'
              href={hero.url}>
              {hero.urlTitle}
            </a>
          </div>
        </div>
      </div>
    )
}

export default HeroImage