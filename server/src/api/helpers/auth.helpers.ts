import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const hashPassword = (password: string) => {
  const rounds = process.env.BCRYPT_ROUNDS || 8

  const hashedPassword = bcryptjs.hashSync(password, rounds)

  return hashedPassword
}

interface UserToken {
  _id: string
  userName: string
}

export const makeToken = (user: UserToken) => {
  const payload = {
    userName: user.userName,
    subject: user._id,
  }

  const options = {
    expiresIn: '8 hours',
  }

  const jwtSecret = process.env.JWT_SECRET || 'secret'

  return jwt.sign(payload, jwtSecret, options)
}
