import type { FunctionComponent } from 'react'
import { homepage } from '../../../data/homepage'

const SalesAlertNotification: FunctionComponent = () => {
  const { sales } = homepage
    return (
      <div className='bg-gray-100 py-2'>
        <div className='text-center'>
          <h2>{sales.title}</h2>
          <a
            className='text-black underline text-sm'
            href={sales.url}>
            {sales.urlTitle}
          </a>
        </div>
      </div>
    )
}

export default SalesAlertNotification
