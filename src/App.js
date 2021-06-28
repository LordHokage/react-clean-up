import './App.css';
import {useState} from "react"
import Folders from "./Folders"
import Input from "./Input"
import {Correct} from "./Correct"
import {Incorrect} from "./Incorrect"

function App() {
  const [apiData, setApiData] = useState("");
  const [showDiv, setShowDiv] = useState(false);


  const handleClick = () =>{
      setShowDiv(!showDiv);
  }
  return (
    <div class="wrapper">
      {showDiv ? <Correct /> : null}
      <div className="directory-container">
        <Folders />
        <Input />

        <button onClick = {handleClick}>Get Data</button>
      </div>
      </div>
  );
}

export default App;
