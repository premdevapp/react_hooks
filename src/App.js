import { useLayoutEffect, useEffect, useRef } from "react";
import "./App.css";
const App = () => {
  const devRef = useRef(null);
  useLayoutEffect(() => {
    console.log(devRef.current.value);
  }, []);
  useEffect(() => {
    devRef.current.value = "HELLO"
  }, []);
  return (
    <div className="App">
      <input ref={devRef} defaultValue="Prem" style={{width: "2rem", height: "1.2rem"}} />
    </div>
  );
};

export default App;
