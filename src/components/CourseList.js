import React from "react"
import Course from "./Course"

const CourseList = (props) => {

 const courses = props.data
 const filtered = props.filtered
 
 return (
  <div className="course-list">
   {!filtered ? courses.map(course => <Course key={course.id} data={course} />) : filtered.map(course => <Course key={course.id} data={course} />) }
   </div>
 )
}
   


export default CourseList;