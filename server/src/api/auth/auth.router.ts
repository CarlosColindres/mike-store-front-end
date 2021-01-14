import { CONNREFUSED } from 'dns'
import { Router } from 'express'
import controllers from './auth.controllers'
import { authValidation } from '../middleware/auth.middleware'
const router = Router()

// api/auth/register

router.post('/register', authValidation, controllers.registerUser)

// api/auth/login

router.post('/login', authValidation, controllers.loginUser)

export default router
