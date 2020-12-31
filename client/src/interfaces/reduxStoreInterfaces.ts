interface ModalState {
    sidebar: boolean
    loginModal: boolean
    registerModal: boolean
}

export interface ReduxStoreInterface {
    modalState: ModalState
}