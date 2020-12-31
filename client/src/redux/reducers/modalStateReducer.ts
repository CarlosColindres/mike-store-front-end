import {TOGGLE_SIDEBAR, TOGGLE_REGISTER_MODAL, TOGGLE_LOGIN_MODAL} from '../actions/modalStateActions'

const initialModalState = {
    sidebar: false,
    loginModal: false,
    registerModal: false
}

type Action = {type: string}

const modalStateReducer = (state = initialModalState, action: Action) => {
   switch (action.type) {
       case TOGGLE_SIDEBAR:
           return {
               ...state,
               sidebar: !state.sidebar
           }
        case TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                sidebar: false,
                loginModal: !state.loginModal
            }
        case TOGGLE_REGISTER_MODAL:
            return {
                ...state, 
                sidebar: false,
                registerModal: !state.registerModal
            }
       default:
           return state
   }
}

export default modalStateReducer