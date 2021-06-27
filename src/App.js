import './App.css';
import {useState} from "react"
import Folders from "./Folders"
import Input from "./Input"
import {Correct} from "./Correct"
import {Incorrect} from "./Incorrect"

function App() {
  const [apiData, setApiData] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  // const fetchData = async() =>{
  //   const res = await fetch("api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=991af4d82cdfbbbcc530b9f555cd6835");
  //   const data = await res.json();
  //   setApiData(data);
  // }

  const handleClick = () =>{
      setShowDiv(!showDiv);
  }
  return (
    <div class="wrapper">
      {showDiv ? <Correct /> : null}
      <div className="directory-container">
        {/* <Folders />
        <Input /> */}

        <button onClick = {handleClick}>Get Data</button>
      </div>
      </div>
  );
}

export default App;
