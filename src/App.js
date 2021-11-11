
import { useReducer } from "react"
import "./App.css"

const initialState = {
  counter: 0,
  isVisible: true,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1}
    case "TOGGLE":
      return {...state, isVisible: !state.isVisible}
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "TOGGLE" });
  }
  return (
    <div className="App">
      <p>{state.counter}</p>
      <button onClick={handleClick}>Click</button>
      {state.isVisible && <p>I am Visible</p>}
    </div>
  )
}

export default App
