// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'fox',
  password: '01010300',
  database: 'model_example'
});

module.exports = connection;