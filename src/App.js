import {useState, useEffect} from "react";
import axios from "axios";
import "./App.css"
const App = () => {
  const [data, setData] = useState("")
  useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => setData(res.data[0].email))
        .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      {data && <h1>Email: {data}</h1>}
    </div>
  )
}

export default App;
