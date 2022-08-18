var express = require("express");
var app = express();
const PORT = 8000;

app.use(express.json());
app.get("/students", (req, res) => {
  res.status(200).send({
    name: "Javed Ahmad",
    company: "MergeStack",
  });
});

app.listen(PORT, () =>
  console.log(`its live on adress http://localhost:${PORT}`)
);
