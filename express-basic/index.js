const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  { id: 1, title: "미쓰백" },
  { id: 2, title: "HarryPorter" },
  { id: 3, title: "Ant Man" }
];

app.get("/", (req, res) => {
  res.send("Happy Hacking");
});

app.get("/:name", (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

// CRUD
// CREATE READ UPDATE DESTORY
// POST GET PUT DELETE

/* GET /api/movies */
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(movie => {
    return movie.id === parseInt(req.params.id);
  });
  if (!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
  }
  console.log(movie);
  res.send(movie);
});

/* POST /api/movies */
app.post("/api/movies", (req, res) => {
  const schema = {
    //유효성검사
    title: Joi.string()
      .min(2)
      .required()
  };

  const result = Joi.validate(req.body, schema); //유효성검사

  if (result.error) {
    return res.status(400).send(result.error.message);
  }

  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);
  res.send(movie);
});

// /* PUT /api/movies/1 */
app.put("/api/movies/:id", (req, res) => {
  // movie에서 id로 movie를 찾는다.
  const movie = movies.find(movie => movie.id === parseIns(req.params.id));
  // 없으면 404
  if (!movie) {
    res
      .status(404)
      .send(`Movie with given id(${req.params.id}) is not defined`);
  }
  // 아니면 입력데이터를 검사한다
  const schema = {
    title: Joi.string()
      .min(2)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  // 유효하지 않으면, 400
  if (result.error) {
    return res.status(400).send(result.error.message);
  }
  // Good! Update 한다.
  movie.title = req.body.title;
  // 업데이트 한 movie 리턴!
  res.send(movie);
});

// /* DELETE /api/movies/1 */
app.delete("/api/movies/:id", (req, res) => {
  const movie = movies.find(movie => {
    return movie.id === parseInt(req.params.id);
  });
  if (!movie) {
    res
      .status(404)
      .send(`Movie with given id(${req.params.id}) is not defined`);
  }
  res.delete(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
