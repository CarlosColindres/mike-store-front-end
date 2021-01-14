import { ShoeProductModel } from './products.schema'
import type { ShoeProduct } from '../../interface/products.interface'

const createProduct = (product: ShoeProduct) => {
  return ShoeProductModel.create(product)
}

const getProductsByCategory = (category: any) => {
  return ShoeProductModel.find({ category: category }).select(["name", "price", "image", "category"]).lean().exec()
}

const getProductById = (_id: string) => {
  return ShoeProductModel.findById(_id).lean().exec()
}

const updateProduct = (id: string, update: string | ShoeProduct) => {
  return ShoeProductModel.findByIdAndUpdate(id, { update }, { new: true })
    .lean()
    .exec()
}

export default  {
    createProduct,
    getProductById,
    getProductsByCategory,
    updateProduct
}