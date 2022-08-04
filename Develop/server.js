const express = require('express');
const path = require('path');
const fs = require('fs');
const dbService = require('./db/dbService')

const app = express();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.get('/api/notes', (req, res) => {
  const data = fs.readFileSync('db/db.json', 'utf8')
  res.send(data);
})

app.post('/api/notes', (req, res) => {
  const data = dbService.writeToDb(req.body);
  res.json(data);
  // .then(note => res.json(note))
  // .catch(err => res.status(500).json(err))

  // TODO: investigate why it is adding the note twice.
  // const data = fs.readFileSync('db/db.json', 'utf8')
  // const notes = JSON.parse(data)
  // console.log('req: ', req.body);
  // notes.push(req.body);
  // console.log('notes: ', notes);
  // fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(notes));
})

// Delete notes once done with them
// app.delete('/api/notes', (req, res) => {
//   let jsonFilePath = path.join(__dirname, "/");
//   for (let i = 0; < data.length; i++) {
//     if (database[i].id == req.params.id) {
//       database.splice(i, 1);
//       break;
//     }
//   }
//   // Write the bd.json file again
//   fs.writeFileSync(jsonFilePath, JSON.stringify(data), function (err) {
//     if(err) {
//       return console.log("your note was deleted!");
//     }
//   })
// });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log("listening on port 3000")
})