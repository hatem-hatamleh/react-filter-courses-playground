
import Filter from './components/Filter';
import React, {useEffect, useState} from "react"
import CourseList from './components/CourseList';




function App() {

  const [item, setItem] = useState("")
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])

 useEffect(() => {
  fetch('http://localhost:8080/courses')
  .then(response => response.json())
  .then(data => setCourses(data))
 }, [])

 useEffect(() => {
   setFilteredCourses(courses.filter(course => course.title.toLowerCase().includes(item.toLowerCase())))
 }, [item, courses])


  
  return (
    <div className="App">
     <Filter handelChange={e => setItem(e.target.value)} />
     <CourseList data={courses} filtered={filteredCourses} />
    </div>
  );
}

export default App;
