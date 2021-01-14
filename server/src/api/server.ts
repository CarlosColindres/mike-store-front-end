import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser'
const server = express()

//Routers
import productsRouter from './products/products.router'
import authRouter from './auth/auth.router'

server.use(cors())
server.use(json())
server.use(urlencoded({ extended: true }))
server.use(morgan('dev'))

server.use('/api/products', productsRouter)

server.use('/api/auth', authRouter)

server.get('/', (_, res) => {
  res.json('Welcome to mike store')
})

export default server
