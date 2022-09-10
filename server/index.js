require('dotenv').config();

const express = require('express');
// const axios = require('axios');
const path = require('path');
require('./db/index.js');
const app = express();
const PORT = 8080;
const url = 'localhost';

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client', 'dist')));
app.use(express.json());

// const index = '../client/dist/index.html'
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`server totally listening @ http://${url}:${PORT}`);
});
