const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Happy Hacking");
});

app.get("/api", (req, res) => {
  const data = {
    ceo: "john",
    director: "su",
    intern: "js",
    partner: "eun"
  };
  res.send(data);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

/* /api/posts/2018?q=js&sortBy=name&recommended=true */
app.get("/api/posts/:year", (req, res) => {
  res.send(req.query);
});

const port = process.env.PORT || 3000; //앞에 값이 있으면 앞에값쓰고 없으면 3000써라

app.listen(port, () => console.log(`Listening on port ${port}...`));
