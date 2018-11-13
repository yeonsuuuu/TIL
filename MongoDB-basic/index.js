const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost/hello-mongo",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connencted to MongoDB"))
  .catch(error => console.error(error.message));

//Available Schema Datatypes : String, Number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

/* CRUD Operation */

async function createCourese() {
  const course = new Course({
    name: "실전 DApp 빌드",
    author: "john",
    tags: ["Ethereum", "Blockchain", "DAapp"],
    isPublished: false
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourses() {
  const courses = await Course
    //.find({ price: {  $lt: 15, $gt: 15}})
    //.fing({ price: { $in: [10, 15] } })
    // .find({ isPublished: true}) // find.(); 전체를 가져오는 것
    // .limit(10)
    // .sort({ name: -1})
    // .select({ name: 1, tags: 1})
    // .find({ author: /^su/ }) //author 중에 su로 시작하는 것
    // .find({ author: /hn$/ }) //끝에 문자열이 hn인 것
    // .find({ author: /.*oh.*/ }); //앞뒤 상관없이 oh가 있는 모든 문자열
    // .count()
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

/* 논리 쿼리 연산자
  .or
    Course.find()
      .or([{ author: 'suuuu'}, { isPublished: false }])
  .and
    Cousrse.find()
      .and([{ author: 'suuuu'}, { isPublished: false }])
*/

getCourses();
