import {combineReducers} from 'redux'
import cartStateReducer from './cartStateReducer'
import modalStateReducer from './modalStateReducer'
import categoryStateReducer from './categoryStateReducer'
export default combineReducers({
    modalState: modalStateReducer,
    cart: cartStateReducer,
    categoryState: categoryStateReducer
})