import {ADD_WOMEN_SHOES_TO_STATE, ADD_MEN_SHOES_TO_STATE} from '../actions/categoryStateActions'

export const categoryState = {
    menShoes: [],
    womenShoes: []
}

type Actions = {type: string, payload: []}

const categoryStateReducer = (state = categoryState, actions: Actions) => {

    switch (actions.type) {
      case ADD_WOMEN_SHOES_TO_STATE:
        return {
          ...state,
          womenShoes: actions.payload,
        }
      case ADD_MEN_SHOES_TO_STATE:
        return {
          ...state,
          menShoes: actions.payload,
        }
      default:
        return state
    }

}

export default categoryStateReducer