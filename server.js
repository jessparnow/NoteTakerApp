const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/html_routes"));
app.use("/api", require("./routes/api_routes"));

  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

