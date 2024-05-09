// de-structuring of an object and API's

const course ={
    courseName :"js in hindi",
    price:"899",
    courseInstuctor:"rahul"

}

const {courseInstuctor} = course
// for destrcuturing
const {courseInstuctor:instructor}=course
console.log(instructor)

