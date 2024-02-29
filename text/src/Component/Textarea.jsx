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
        <div>
            <div className='container mt-5'>

                    <h2> Text Area TRY IT </h2>
                    <textarea className="form-control" value={text} onChange={handleOnClick} placeholder='Enter your text here' rows="8" ></textarea>
                    <button className='btn btn-primary mt-1 mx-2 my-2' onClick={toupper}>convert to uppercase</button>
                    <button className='btn btn-primary mt-1 mx-2 my-2' onClick={tolower}>convert to uppercase</button>
                    <button className='btn btn-primary mt-1 mx-2 my-2' onClick={cleartext}>clear text</button>
                    <button className='btn btn-primary mt-1 mx-2 my-2' onClick={copytext}>copy text</button>
                    <button className='btn btn-primary mt-1 mx-2 my-2' onClick={removeextraspace}>Remove extra spaces</button>
              
            </div>

        </div>
        <div className="container">
            <h1>Your Text Summery</h1>
            <p>Words : {text.split(" ").length} And Latter : {text.length}</p>
        </div>
        </>

    )
}
