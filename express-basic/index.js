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
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find((movie) => {
    return movie.id === parseInt(req.params.id);
  });
  if(!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
  }
  console.log(movie);
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);
  res.send(movie)
});

// /* PUT /api/movies/1 */
// app.put();

// /* DELETE /api/movies/1 */
// app.delete();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
