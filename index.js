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

app.post("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(406).send({ message: "we must have a name" });
  }
  res.send({
    name,
    company: "MergeStack",
  });
});

app.listen(PORT, () =>
  console.log(`its live on adress http://localhost:${PORT}`)
);
