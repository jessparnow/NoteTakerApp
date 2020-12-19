const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (res, req) {
    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw err;
      res.send(JSON.parse());
    });
  });

  app.post("/api/notes", function (res, req) {
    let notes = fs.readFileSync("./db/db.json", "utf-8");
    
      notes = JSON.parse(notes);
      // console.log(req.body);
      // console.log(notes);
      notes.push(req.body);
      // console.log(notes);
      for (let i = 0; i < notes.length; i++) {
        console.log(i)
        notes[i].id = i + 1;
      };
      console.log(notes);
      JSON.stringify(notes);
      fs.writeFile("./db/db.json", function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.json(JSON.parse(data));
        }
      });
    
  });
  app.delete("/api/notes/:id", function (req, res) {
    fs.readFile(__dirname + "./db/db.json", function (err, data) {
      if (err) console.log(err);
      let arrayy = JSON.parse(data);
      const newArrayy = arrayy.filter(
        (dataItem) => dataItem.id !== parseInt(req.params.id)
      );
      fs.writeFile(
        __dirname + "./db/db.json",
        JSON.stringify(newArrayy),
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            res.send(arrayy);
          }
        }
      );
    });
  });
  
};
