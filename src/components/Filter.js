
const Filter = (props) => {

 return (
  <div className="filter-container">
   <form>
      <label htmlFor="course-input">Search for course</label>
      <input 
       className="search-input" 
       type="text" 
       id="course-input"
       onChange={props.handelChange}/>
    </form>
  </div>
 )
}

 


export default Filter