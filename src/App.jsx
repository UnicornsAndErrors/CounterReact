import React, {useState} from 'react'
import "./App.css"

const App = () => {


    const [counter, setCounter] = useState(0);
    
  
    const handleClick1 = () => {
      
      setCounter(counter + 1)
    };
    
 
    const handleClick2 = () => {
     
      setCounter((prevCount) =>prevCount- 1)
    };



  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleClick2}>-</button>
      <span>{counter}</span>
    
      <button onClick={handleClick1}>+</button>
      </header>
    </div>
  )
};

export default App;
