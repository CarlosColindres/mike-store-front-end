import { Router } from 'express'
import controllers from './products.controllers'
const router = Router()

// /api/products/:id

router.get('/:category', controllers.getByCategory)
router.get('/shoe/:id', controllers.getProductById)





export default router