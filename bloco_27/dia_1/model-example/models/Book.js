// model/Book.js

const connection = require('./connection');
const Author = require('./Author');

async function getAll () {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books');
  return books.map(({ id, title, author_id}) => ({ 
    id,
    title,
    autorId: author_id,
  }));
};

async function getByAuthorId (authorId) {
  const query = (`
    SELECT * from model_example.books 
    WHERE author_id=?;
    `);
  const [books] = await connection.execute(query, [authorId]);
  return books.map(({ id, title, author_id }) => ({ 
    id,
    title, 
    authorId: author_id,
  }));
};

async function getById (id) {
  const query = (`
    SELECT * FROM model_example.books
    WHERE id = ?
  `);

  const [booksData] = await connection.execute(query, [id]);

  if(booksData.length === 0){
    return null;
  }

  return booksData.map(({ title, author_id }) => ({
    id,
    title, 
    authorId: author_id,
  }))[0];

};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

// async function create(title, author_id) {
//   const query = (
//     `
//     INSERT INTO model_example.books
//     (title, author_id)
//     VALUES (?, ?)
//     `
//   );
//   conection.execute(query, [title, author_id]);
// }


const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create
}