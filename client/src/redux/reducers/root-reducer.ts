import {combineReducers} from 'redux'
import modalStateReducer from './modalStateReducer'
export default combineReducers({
    modalState: modalStateReducer
})