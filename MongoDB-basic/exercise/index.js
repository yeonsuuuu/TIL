const mongoose = require('mongoose');// mongoose 쓰겠다

mongoose.connect('mongodb://localhost/exercise-basic', { useNewUrlParser: true })
  .then(()  => console.log('Exercise TIME! :)'))
  .catch(error => console.error(error.message)); //mongodb랑 연결


const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: String
});

const Course = mongoose.model("Course", courseSchema);

async function getEx1(){
  const courses = await Course
    .find({ isPublished: true})
    .or([{tags:'backend'}])
    .sort({name: 1})
    .select('name author');

console.log(courses);
}

async function getEx2(){
  const courses = await Course
    .find({ isPublished: true})
    .or([{ tags:'backend'}, {tags:'frontend'}])
    .sort('-price')
    .select('name price')
console.log(courses);   
}

async function getEx3(){
  const courses = await Course
    .find( { price: {$gt:15}})
    .find({ name: /.*js.*/i })
console.log(courses);   
}


getEx1();