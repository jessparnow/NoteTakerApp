const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html_routes")(app);
require("./routes/api_routes")(app);

  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

