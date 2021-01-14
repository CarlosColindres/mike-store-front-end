import { UserModel } from './auth.schema'

interface User {
  userName: string
  password: string
}

const createUser = (user: User) => {
  return UserModel.create(user)
}

const findUserByUsername = (userName: string) => {
  return UserModel.findOne({ userName: userName }).lean().exec()
}

export default {
  createUser,
  findUserByUsername,
}
