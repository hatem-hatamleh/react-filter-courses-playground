import React from "react"

const Course = (props) => {

 const {title, description,price, videos, image } = props.data

 return (
  <div className="course-card">
   <img className="course-image" src={image} alt=""/>
   <h1 className="course-title">{title}</h1>
   <p className="course-desc">{description}</p>
   <div className="course-footer">
    <p className="course-price"><span>price: $</span>{price}</p>
    <p className="course-vids"><span>videos:</span>{videos}</p>
   </div>
   
  </div>
 )
}
   

export default Course;