import type { Request, Response } from 'express'

import productModel from './products.model'

const getByCategory = async (req: Request, res: Response) => {
  const categoryName = req.params.category

  try {
    const products = await productModel.getProductsByCategory( categoryName)
    res.status(200).json(products)
  } catch (error) {
    console.log(error.message)
    res.status(404).json({ message: 'No products found' })
  }
}

const getProductById = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    const product = await productModel.getProductById(id)
   
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message)
    res.status(404).json({ message: 'No products found' })
  }
}

export default {
  getByCategory,
  getProductById
}
