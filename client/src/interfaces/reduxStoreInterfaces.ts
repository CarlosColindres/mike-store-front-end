interface ModalState {
  sidebar: boolean
  loginModal: boolean
  registerModal: boolean
}

export interface ProductCart {
  name: string
  id: number
  quantity: string
  img: string
  size: string
  price: number
  category: string
}

interface CartState {
  cart: ProductCart[]
  cartLength: number
  shipping: number
  tax: number
  total: number
  subtotal: number
}

export interface ReduxStoreInterface {
  modalState: ModalState
  cart: CartState
}
