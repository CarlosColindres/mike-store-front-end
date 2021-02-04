export interface ModalState {
  sidebar: boolean
  loginModal: boolean
  registerModal: boolean
}

export interface ProductCart {
  name: string
  _id: string
  quantity: string
  image: string
  size: string
  price: number
  category: string
}

export interface CartState {
  cart: ProductCart[]
  cartLength: number
  shipping: number
  tax: number
  total: number
  subtotal: number
}

export interface CategoryProduct {
  _id: number
  name: string
  image: string
  price: number
  category: string
}

export interface CategoryState {
  menShoes: CategoryProduct[]
  womenShoes: CategoryProduct[]
}

export interface ReduxStoreInterface {
  modalState: ModalState
  cart: CartState
  categoryState: CategoryState
}
