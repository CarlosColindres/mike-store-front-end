import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/root-reducer'

export const store = createStore(rootReducer, applyMiddleware(logger))
