const database = ("../db/db.json");

const express = require("express");
const path = require("path");

const app = express();

// const js = require('../public/assets/js/index');

// const fs = require("fs");
// const util = require("util");

//database = [{}];

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
      res.json(database);
    });
  };
  app.post("/notes", (req, res) => {
    if (database) {
      database.push(req.body);
      res.json(true);
    }
  });

// const writeFileAsync = util.promisify(fs.writeFile)