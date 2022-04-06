const express = require('express');
const app = express()
const path = require('path');
const mysql = require('mysql2');

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Hi"))

app.use(express.static(path.join(__dirname, 'public')))

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
  );