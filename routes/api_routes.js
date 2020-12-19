const database = "../db/db.json";
const DB = require("../db/newfile");
const express = require("express");
const router = express.Router();
const path = require("path");
// const util = require("util");

//database = [{}];

router.get("/notes", (req, res) => {
  DB.getNotes().then(function (notes) {
    res.json(notes);
  });
  console.log(database);
});

router.post("/notes", (req, res) => {
  // database.push(req.body);

  DB.addNote(req.body)
  res.json(note)
});

router.delete("/notes/:id", (req, res) =>{
  DB.removeNote(req.params.id)
  res(true)
});

module.exports = router;
