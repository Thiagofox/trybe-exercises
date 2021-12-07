const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'fox',
  password: '01010300',
  database: 'mvc_example'});

module.exports = connection;