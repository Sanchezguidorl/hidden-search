import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from 'react';
import "./App.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showInput, setShowInput]= useState<boolean>();

  return (
    <div id="App">
      <div id="SearchBar">
        <input type="text" className={showInput ? 'show-search': ''} placeholder="Search..." />
        <div id="SearchButton" onClick={()=>setShowInput(!showInput)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
}

export default App;
