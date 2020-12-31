import {combineReducers} from 'redux'
import cartStateReducer from './cartStateReducer'
import modalStateReducer from './modalStateReducer'
export default combineReducers({
    modalState: modalStateReducer,
    cart: cartStateReducer
})