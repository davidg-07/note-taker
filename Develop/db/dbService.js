const fs = require('fs');
const path = require('path');

function readFromDb() {
    const data = fs.readFileSync('db/db.json', 'utf8')
    return data
}

function writeToDb(note) {
    const data = fs.readFileSync('db/db.json', 'utf8')
    const notes = JSON.parse(data)
    notes.push(note) 

}