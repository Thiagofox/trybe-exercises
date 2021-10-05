const express = require('express');

const app = express();


app.use(express.json())


const fs = require('fs').promises;

app.get('/books', async (_req, res, next) => {
  try {
    const fileContent = await fs.readFile('./book.json');
    const books = JSON.parse(fileContent);
    return res.status(200).json(books);
  } catch (error) {
    next(error)
  }

});

app.use((error, _req, res, _next) => {
  if(error.code == 'ENOENT')
    return res.status(500).json({ message: "Ocorreu algum erro inesperado, tente mais tarde!" })

  res.status(500).json({ message: "Ocorreu um erro inesperado" })
})

app.listen(3000, () => console.log(`App ouvindo a porta 3000!`));