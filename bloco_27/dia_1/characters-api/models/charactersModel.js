const connection = require('./mysqlConnection')

const getAllcharacters = async () => {
  const [result] = await connection.execute('SELECT * FROM characters')
  return result;
}

const insertcharacter = async (name, cartoon) => {
  const [result] = await connection.execute('INSERT INTO characters (name, cartoon) VALUES (?, ?)', [name, cartoon])

  const serialized = {
    id: result.insertId,
    name,
    cartoon
  }
  return serialized
}

module.exports = {
  getAllcharacters,
  insertcharacter
}