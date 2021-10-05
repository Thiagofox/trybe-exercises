const express = require('express');
const productRoutes = require('./productsRoutes')

const app = express();


app.use(express.json())

app.use('/products', productRoutes)

app.listen(3000, () => console.log(`App ouvindo a porta 3000!`));