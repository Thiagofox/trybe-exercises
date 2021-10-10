const express = require('express')
const charactersRoutes = require('./routes/charactersRoutes')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/characters', charactersRoutes)


app.listen(PORT, () => console.log(`Servidor na porta: ${PORT}`))