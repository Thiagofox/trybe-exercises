const connection = require('./connection');

const { ObjectId } = require('mongodb');

const Author = require('./Author');


const getAll = () => connection()
.then((db) => db.collection('books').find({}).toArray());


const getByAuthorId = (authorId) => connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());

    
    
const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
      
    if (!book) return null;
      
    return book;
}


const create = (title, authorId) => connection()
  .then((db) => db.collection('books').insertOne({ title, authorId }));


const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
}

    module.exports = {
      getAll,
      getByAuthorId,
      create,
      findById,
      isValid
    };