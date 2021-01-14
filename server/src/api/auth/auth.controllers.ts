import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import { hashPassword, makeToken } from '../helpers/auth.helpers'
import userModal from './auth.model'

const registerUser = async (req: Request, res: Response) => {
  const newUser = {
    userName: req.body.userName,
    password: hashPassword(req.body.password),
  }

  try {
    const user = await userModal.createUser(newUser)
    if (user) {
      res.status(201).json({
        message: `user has been created successfully please log in`,
      })
    }
  } catch (error) {
    res.status(404).json({
      message: 'userName is taken',
    })
  }
}

const loginUser = async (req: Request, res: Response) => {
  const { userName, password } = req.body

  try {
    const user: any = await userModal.findUserByUsername(userName)
    if (user && bcryptjs.compareSync(password, user.password)) {
      const token = makeToken(user)
      res.status(200).json({
        token,
        _id: user._id,
        userName: user.userName,
      })
    } else {
      res.status(401).json({
        message: 'invalid credentials',
      })
    }
  } catch (error) {
    res.status(404).json({
      message: `user with ${userName} not found please create an account`,
    })
  }
}

export default {
  registerUser,
  loginUser,
}
