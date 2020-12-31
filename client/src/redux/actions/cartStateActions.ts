import type {ProductCart} from '../../interfaces/reduxStoreInterfaces'

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'

export const addToCart = (item: ProductCart) => {
    return {type: ADD_ITEM_TO_CART, payload: item}
}

export const removeFromCart = (item: ProductCart) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: item
    }
} 