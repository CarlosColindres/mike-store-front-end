import { CategoryProduct } from '../../interfaces/reduxStoreInterfaces'

export const ADD_MEN_SHOES_TO_STATE = 'ADD_MEN_SHOES_TO_STATE'

export const ADD_WOMEN_SHOES_TO_STATE = 'ADD_WOMEN_SHOES_TO_STATE'

export const addMenShoes = (shoes: CategoryProduct[]) => {
  return {
    type: ADD_MEN_SHOES_TO_STATE,
    payload: shoes,
  }
}

export const addWomenShoes = (shoes: CategoryProduct[]) => {
  return {
    type: ADD_WOMEN_SHOES_TO_STATE,
    payload: shoes,
  }
}
