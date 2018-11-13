const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo',{ useNewUrlParser: true})
  .then(() => console.log('Connencted to MongoDB'))
  .catch(error => console.error(error.message));

  //Available Schema Datatypes : String, Number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now},
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);

/* CRUD Operation */

async function createCourese() {
  const course = new Course({
    name: '실전 DApp 빌드',
    author: 'john',
    tags: ['Ethereum', 'Blockchain', 'DAapp'],
    isPublished: false
  });
  try{
    const result = await course.save();
    console.log(result)
  }catch(error) {
    console.error(error.message);
  }
}

async function getCourses() {
  const courses = await Course
  //.find({ price: {  $gt: 15}})
    .find({ isPublished: true}) // find.(); 전체를 가져오는 것 
    .limit(10)
    .sort({ name: -1})
    .select({ name: 1, tags: 1})
  console.log(courses);
}

/* 비교 쿼리 연산자
  $eq (equal)
  $neq (not equal)
  $gt (greater than)
  $gte (greater than or equal to)
  $lt (less than)
  $lte
  $in
  $nin
*/


getCourses();