const genres = require('./routes/genres');
const movies = require('./routes/movies');
// const Joi = require("joi"); model 과 routes 빼면서 joi사용 안함
const mongoose = require("mongoose");
const express = require("express");
const app = express();

/* Connect DB */
mongoose
  .connect(
    "mongodb://localhost/video-api",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error(error));

/* Middlewares */ //여기를 지나가면서 처리 
app.use(express.json()); //express json을 이용해라
app.use('/api/genres', genres); 
app.use('/api/movies', movies);

/* Model */
/* Routes */


/* Server */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
