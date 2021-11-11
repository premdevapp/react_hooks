import {useRef, useState} from "react";

import "./App.css"

const App = () => {
  const [state, setState] = useState(undefined);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    setState(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <div className="App">
      <p>{state ?? "hey"}</p>
      <input type="text" placeholder="type here to show" ref={inputRef} />
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default App;
