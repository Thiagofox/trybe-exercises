const connection = require('./mongodbConnection')

const getAllcharacters = async () => {
  return connection().then((db) => db.collection('characters').find().toArray());
}

const insertcharacter = async (name, cartoon) => {
  connection()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => {id: result.insertedId, name, cartoon});
}

module.exports = {
  getAllcharacters,
  insertcharacter
}