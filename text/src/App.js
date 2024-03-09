import { useState } from "react";
import "./App.css";
import Navebar from "./Component/Navebar";
import Textarea from "./Component/Textarea"
import About from "./Component/About"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');


  const toggelmode = () => {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(59 58 58)';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <>
      <Router>
        <Navebar tital='textutill' mode={mode} toggelmode={toggelmode} />
        <Routes>
          <Route path="/" element={ <Textarea placeholder="Enter your text here" mode={mode} />}>
          </Route>
          <Route path="About/" element = {<About mode={mode} />}> 
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
