import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import clientRouter from './routes/client.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(path.resolve(), 'public')))

app.get("/", (req, res) => {
    res.status(200).send({ response: true })
})

app.use("/clients", clientRouter)

app.use((req, res, next) => {
    next(res.status(404).send({ message: "Recurso no encontrado" }))
})

var port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
