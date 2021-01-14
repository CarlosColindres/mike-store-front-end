import { Request, Response, NextFunction } from 'express'

export const authValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({
      message: 'username and password required',
    })
  } else {
    next()
  }
}
