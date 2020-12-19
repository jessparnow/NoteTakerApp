const express = require("express");
const path = require("path");
// const router = require("express");
// const app = express();
const router = express.Router();


    router.use(express.static(path.join(__dirname, '../public')));
    
      router.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
      });

      router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

module.exports = router;
//express route -- youtube 