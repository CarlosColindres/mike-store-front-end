import type { ProductCart } from '../../interfaces/reduxStoreInterfaces'
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../../redux/actions/cartStateActions'
export const initialCartState = {
  cart: [],
  cartLength: 0,
  shipping: 0,
  tax: 0,
  total: 0,
  subtotal: 0
}

type CartAction = { type: string; payload: ProductCart}

const findTotal = (currentTotal: number, newItemPrice: number) => currentTotal + newItemPrice

const subtractTotal = (currentTotal: number, newItemPrice: number) =>
  currentTotal - newItemPrice

const cartStateReducer = (state = initialCartState, action: CartAction) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartLength: state.cartLength + 1,
        shipping: 0,
        tax: 0,
        subtotal: findTotal(state.total, action.payload.price),
        total: findTotal(state.total, action.payload.price),
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: ProductCart) => item.id !== action.payload.id),
        cartLength: state.cartLength - 1,
        shipping: 0,
        tax: 0,
        subtotal: subtractTotal(state.total, action.payload.price),
        total: subtractTotal(state.total, action.payload.price),
      }
    default:
      return state
  }
}

export default cartStateReducer
