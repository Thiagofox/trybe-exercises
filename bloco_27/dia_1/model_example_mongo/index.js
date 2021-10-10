// index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book')

const app = express();
app.use(bodyParser.json());


app.get('/authors', async (_req, res) => {
  const result = await Author.getAll();

  res.status(200).json(result);
});

// http://localhost:3000/authors

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.getById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

// http://localhost:3000/authors/1

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (Author.isValid(first_name, middle_name, last_name) === false) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// http://localhost:3000/authors

/* 
body: 

{
  "first_name": "Neil",
  "middle_name": "",
  "last_name": "Gaiman"
}
*/

app.get('/books', async (_req, res) => {
  const result = await Book.getAll();

  res.status(200).json(result);
});

// http://localhost:3000/books

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const result = await Book.getById(id);

  if (!result) {
    return res.status(404).json({ message: 'Not found' });
  }
  return res.status(200).json(result);
})

// http://localhost:3000/books/1

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

// http://localhost:3000/authors/?author_id=1 ???????

app.post('/books', async(req, res) => {
  const { title, author_id } = req.body;

  if (await Book.isValid(title, author_id) === false) {
    return res.status(400).json({ message: 'Dados Inválidos'});
  }
  await Book.create(title, author_id);
  res.status(200).json({ message: 'Livro cadastrado com sucesso' });
});

// http://localhost:3000/books

/* 
body: 

{
  "title": "Deuses Americanos",
  "author_id": "6"
}
*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
