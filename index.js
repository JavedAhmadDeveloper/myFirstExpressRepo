var express = require("express");
var app = express();
const PORT = 8000;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`its live on adress http://localhost:${PORT}`)
);
