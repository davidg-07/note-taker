const fs = require('fs');
const path = require('path');
const util = require('util');

const readFileSync = util.promisify(fs.readFile)
const writeFileSync = util.promisify(fs.writeFile)

function readFromDb() {
    const data = fs.readFileSync('db/db.json', 'utf8');
    return data
}

function writeToDb(note) {
    const data = fs.readFileSync('db/db.json', 'utf8');
    const notes = JSON.parse(data);
    notes.push(note);
    const writingData = fs.writeFileSync('db/db.json', JSON.stringify(notes));
    return notes
    
}

module.exports = {writeToDb, readFromDb}