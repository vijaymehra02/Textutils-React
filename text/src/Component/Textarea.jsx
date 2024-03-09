import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

export default function Textarea(props) {

    const [text , setText] = useState('');
     
    function toupper() {
       let temp = text.toUpperCase();
       setText(temp);
    }
    function tolower() {
       let temp = text.toLowerCase();
       setText(temp);
    }
    function cleartext() {
       setText("");
    }
    function copytext() {
      navigator.clipboard.writeText(text);
    }
    function removeextraspace() {
      let temp = text.split(/[ ]+/);
      setText(temp.join(" "));
    }

    const handleOnClick = (event) => {
           setText(event.target.value);
    }

    return (
        <>
        <div style={{ backgroundColor: props.mode==='light'?'white':'rgb(59 58 58)' , color: props.mode==='light'?'black':'white' }}>
            <div className='container mt-5'style={{color: props.mode==='light'?'black':'white' }} >
                    <h2> Text Area TRY IT </h2>
                    <textarea className="form-control"  onChange={handleOnClick} placeholder='Enter your text here' rows="8" style={{ backgroundColor: props.mode==='light'?'white':'rgb(59 58 58)' , color: props.mode==='light'?'black':'white' }} value ={text}></textarea>
                    <button className='btn btn-primary mt-3 mx-2 my-2' disabled = {text.length===0} onClick={toupper}>convert to uppercase</button>
                    <button className='btn btn-primary mt-3 mx-2 my-2'disabled = {text.length===0} onClick={tolower}>convert to uppercase</button>
                    <button className='btn btn-primary mt-3 mx-2 my-2' disabled = {text.length===0} onClick={cleartext}>clear text</button>
                    <button className='btn btn-primary mt-3 mx-2 my-2' disabled = {text.length===0} onClick={copytext}>copy text</button>
                    <button className='btn btn-primary mt-3 mx-2 my-2' disabled = {text.length===0} onClick={removeextraspace}>Remove extra spaces</button>
              
            </div>

        </div>
        <div className="container" style = {{color : props.mode === 'light' ? 'black':'white'}} >
            <h1>Your Text Summery</h1>
            <p>Words : {text.split(" ").filter((element)=>{return element.length !==0}).length} And Latter : {text.length}</p>
        </div>
        </>

    )
}
