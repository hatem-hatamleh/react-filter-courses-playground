
import React, {useState} from 'react'

import './App.css';


function App() {

  const [text, setText] = useState("")

  const handleSubmit = () => {
    setText("Clicked!!")
  }
  
  return (
    <div className="App">
      <button onClick={handleSubmit} className="btn">{ text || "Click ME"}</button>
    </div>
  );
}

export default App;
