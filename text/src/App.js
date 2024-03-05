import { useState } from "react";
import "./App.css";
import Navebar from "./Component/Navebar";
import Textarea from "./Component/Textarea"

function App() {

  const [mode , setmode] = useState('light');


  const toggelmode = () =>{

    if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = 'rgb(59 58 58)';
        }else{
          setmode('light');
          document.body.style.backgroundColor = 'white';
        }

}

  return (
   <>
      <Navebar tital='textutill' mode={mode} toggelmode={toggelmode} />
      <Textarea placeholder="Enter your text here" mode={mode} />
   </>
  );
}
export default App;
