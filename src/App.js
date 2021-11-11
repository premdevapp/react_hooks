import {useLayoutEffect, useEffect} from "react";
import "./App.css"
const App = () => {
useLayoutEffect(() => {})
useEffect(() => {})
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => setCounter((prev)=>prev + 1)}>+</button>
    </div>
  )
}

export default App;
