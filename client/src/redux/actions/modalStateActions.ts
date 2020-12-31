export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL'

export const TOGGLE_REGISTER_MODAL = 'TOGGLE_REGISTER_MODAL'


export const toggleSidebar = () => {
    return {
        type: TOGGLE_SIDEBAR
    }
}

export const toggleLoginModal = () => {
    return {
        type: TOGGLE_LOGIN_MODAL
    }
}
export const toggleRegisterModal = () => {
    return {
        type: TOGGLE_REGISTER_MODAL
    }
}