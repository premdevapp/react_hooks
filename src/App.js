import {useState} from "react";
import "./App.css"
const App = () => {
const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => setCounter((prev)=>prev + 1)}>+</button>
    </div>
  )
}

export default App;
