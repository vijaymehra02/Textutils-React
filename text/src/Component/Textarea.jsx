import React, { useState } from 'react'

export default function Textarea(props) {

    const [text , setText] = useState('Enter your text here');
    function toupper() {
       let temp = text.toUpperCase();
       setText(temp);
    }

    const handleOnClick = (event) => {
           setText(event.target.value);
    }

    return (
        <div>
            <div className='container mt-5'>

                    <h2> Text Area TRY IT </h2>
                    <textarea className="form-control" value={text} onChange={handleOnClick} rows="8" ></textarea>
                    <button className='btn btn-primary mt-1' onClick={toupper}>convert to uppercase</button>
              
            </div>

        </div>

    )
}
