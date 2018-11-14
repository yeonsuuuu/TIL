//genre들 리소스를 관리하는 파일이므로 genres.js
const { Genre, validate } = require('../models/genre') //restructure 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

router.post("/", async (req, res) => {
  // const error = validateGenre(req.body).error //변수명과 끝에 .()가 같으면 밑에처럼 할 수있다
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();

  res.send(genre);
});

router.get("/:id", async (req, res) => {
  const genre = await Genre.fingById(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found");
    res.send(genre);
  });

router.patch('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(404).send("The genre with the given ID was not found");

  const genre = await Genre.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  }, { new: true })
  
  res.send(genre);
})

router.delete('/:id', async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if(!genre) return res.status(404).send("The genre with the given ID was not found");

  res.send(genre);
})

module.exports = router;