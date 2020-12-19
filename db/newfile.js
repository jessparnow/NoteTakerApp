const fs = require("fs");
const util = require("util");
const readDBFile = util.promisify(fs.readFile);
const writeDBFile = util.promisify(fs.writeFile);


const { v4: uuidv4 } = require('uuid');

class DB {
    getNotes(){
        //reading the db.json fi;e and returning what is inside of it
        return readDBFile('db/db.json', 'utf-8').then(function(notes){
            //info in the db file comes back as a string and this returns it as an array
            return [].concat(JSON.parse(notes))
        })
    }
        addNote(note) {
            const newNote = {
                title: note.title,
                text: note.text,
                id: uuidv4(),
            }
        
            // Get all notes, add the new note, write all the updated notes, return the newNote
            return writeDBFile('db/db.json', 'utf-8').then(function(notes){
                //info in the db file comes back as a string and this returns it as an array
                return (JSON.stringify(notes))
                .then(notes => [...notes, newNote])
            })
              
        
          }
        
          removeNote(id) {
            // Get all notes, remove the note with the given id, write the filtered notes
          
          }
        
          // const arr = read file
    // arr = database.readFile();
          // arr.push(the new data)
    // arr.push();
          // write.newFile with altered array 
    // fs.writeFile(path.join(__dirname, "../db/db.json"), );
}
module.exports = new DB();