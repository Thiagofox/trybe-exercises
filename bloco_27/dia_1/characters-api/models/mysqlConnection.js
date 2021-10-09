const mysql = require('mysql2/promise')

module.exports = mysql.createPool({
  host: "localhost",
  user: 'fox',
  database: 'live_lecture_26_1',
  password: '01010300',
  port: 3306
})