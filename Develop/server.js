const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.json())

app.use(express.static('public'))

app.get('api/notes')

app.post('')

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.js'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.js'));
});