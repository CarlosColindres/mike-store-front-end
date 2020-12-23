import type {FunctionComponent} from 'react'
import CategoryList from './CategoryList'

const Home: FunctionComponent = () => {
    return (
      <div className='container max-w-screen-xl mx-auto'>
        <CategoryList />
      </div>
    )
}

export default Home
