//Create Database and a Folder init.
use("QasimSemester1")
db.createCollection("Courses")

// Create Operation - Insert One for One and Insert Many for Many
a=db.Courses.insertMany([
    {
      "name": "Artificial Intelligence",
      "grading": "Relative",
      "assignments": 5,
      "labs": 3
    },
    {
      "name": "Digital Signal Processing",
      "grading": "Absolute",
      "assignments": 2,
      "labs": 5
    },
    {
      "name": "Computer Networks",
      "grading": "Relative",
      "assignments": 4,
      "labs": 4
    },
    {
      "name": "Database Management Systems",
      "grading": "Absolute",
      "assignments": 3,
      "labs": 0
    },
    {
      "name": "Machine Learning",
      "grading": "Relative",
      "assignments": 6,
      "labs": 2
    },
    {
      "name": "Operating Systems",
      "grading": "Absolute",
      "assignments": 4,
      "labs": 3
    },
    {
      "name": "Computer Architecture",
      "grading": "Relative",
      "assignments": 3,
      "labs": 4
    },
    {
      "name": "Data Science",
      "grading": "Absolute",
      "assignments": 5,
      "labs": 1
    },
    {
      "name": "Web Development",
      "grading": "Relative",
      "assignments": 2,
      "labs": 5
    },
    {
      "name": "Cybersecurity",
      "grading": "Absolute",
      "assignments": 4,
      "labs": 0
    }
  ])

// Read Operation
let a = db.Courses.find({labs: 5}) 
console.log(a.count())
console.log(a.toArray())

let b = db.Courses.findOne({assignments: 4})
console.log(b) 

//Update Operation
db.Courses.updateMany({grading: "Absolute"},{$set :{grading: "Relative"}})


//Delete Operation
db.Courses.deleteMany({grading: "Relative"})