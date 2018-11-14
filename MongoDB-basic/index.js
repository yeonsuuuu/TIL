const mongoose = require("mongoose"); //mongoose 쓰겠다

mongoose
  .connect(
    "mongodb://localhost/hello-mongo",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connencted to MongoDB"))
  .catch(error => console.error(error.message)); //mongodb랑 연결

//Available Schema Datatypes : String, Number, Date, Buffer, Boolean, ObjectID, Array

//Available Validating options
//String : minlength, maxlength, match, enum
//Numbers, Dates: min, max
//All: required
const courseSchema = new mongoose.Schema(
  /*bluePrint 어떻게 할거다라고 정의*/ {
    name: { type: String, required: true, minlength: 2 },
    author: Array,
    tags: {
      type: String,
      // custom Validator (여기서 유효성검사하는게 부족해서 더 하고싶다)
      validate: {
        validator: function(tags) {
          const result = tags.every(tag => tag.length > 0)
          return tags && tags.length > 0;
        },
        message: "A Course should have at least 1 tag" //실패하면 이 메세지 뜸
      }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean
  }
);

const Course = mongoose.model("Course", courseSchema); //courseSchema를 바탕으로 모델을 만듬. 이거는 compass에 courses로
//자동으로 복수형으로 만들어줌

/* CRUD Operation */
/* Create */
async function createCourese() {
  const course = new Course({
    name: "aa",
    author: "js",
    tags: ['a', 'b'],
    isPublished: false
  });
  try {
    const result = await course.validate();
    console.log(result);
    // const result = await course.save();
    // console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

createCourese();

/* Retrieve */
async function getCourses() {
  //무조건 배열을 내뱉게 되있음
  const courses = await Course.find();
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

// getCourses();

/* Update */
// 1. Qurey First find => change => save
async function updateCourse(id) {
  // Find
  const course = await Course.findById(id);
  if (!course) return; //course가 안들어오면 끝내라

  // Change
  course.author = "suuuu";
  course.tags = ["!!!"];

  // Save
  const result = await course.save();
  console.log(result);
}

// updateCourse("5bea69854ba2ec3f682c7615");

// 2. Update First : 직접 Update => result
async function updateCourses() {
  const result = await Course.updateMany(
    { isPublished: true },
    {
      $set: {
        author: "Lee"
      }
    }
  );
  console.log(result);
}

// updateCourses();

/* Destroy */
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  // const result = await Course.findOneAndDelete();
  console.log(result);
}

// removeCourse("5bea69854ba2ec3f682c7615");
