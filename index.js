require ('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()
const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

server.get('/api/hello', (req, res) => {
    res.json({message: 'api is working'})
})

server.get('/api/users', (req, res) => {
    res.json([])
})

server.post('/api/register', (req, res) => {
    res.json({message: 'api is registering you'})
})

server.post('/api/login', (req, res) => {
    res.json({message: 'checking login credentials. Welcome.'})
})

server.use('*', (req, res) => {
    res.send(`<h1>hello, there!</h1>`)
})

server.use((err, req, res, next)=> {
    res.status(500).json({
        message: err.message,
        stack: err.stack, 
    })
})


server.listen(PORT, () => {
    console.log('listening on port')
})
console.log(process.env.PORT, process.env.NODE_ENV)