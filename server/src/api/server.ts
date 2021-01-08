import express, {Response} from 'express'

const server = express()

server.use(express.json())

server.get('/', (_, res) => {
    res.json('hello')
})

export default server