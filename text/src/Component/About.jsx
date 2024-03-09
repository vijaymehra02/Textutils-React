import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className="accordion accordion-flush container "  id="accordionFlushExample ">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CTU" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor:props.mode=='light'?'white':'#484848',color:props.mode=='light'?'black':'white'}}>
                            Convert To Uppercase
                        </button>
                    </h2>
                    <div id="CTU" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode=='light'?'white':'#676767',color:props.mode=='light'?'black':'white'}}>newStr = upper( str ) converts all lowercase characters in str to the corresponding uppercase characters and leaves all other characters unchanged. <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CTL" aria-expanded="false" aria-controls="flush-collapseTwo"style={{backgroundColor:props.mode=='light'?'white':'#484848',color:props.mode=='light'?'black':'white'}}>
                            Convert To Lowercase
                        </button>
                    </h2>
                    <div id="CTL" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode=='light'?'white':'#676767',color:props.mode=='light'?'black':'white'}}>newStr = lower( str ) converts all uppercase characters in str to the corresponding lowercase characters and leaves all other characters unchanged.<code>.accordion-flush</code> class. This is the second item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CT" aria-expanded="false" aria-controls="flush-collapseThree"style={{backgroundColor:props.mode=='light'?'white':'#484848',color:props.mode=='light'?'black':'white'}}>
                          Clear Text
                        </button>
                    </h2>
                    <div id="CT" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode=='light'?'white':'#676767',color:props.mode=='light'?'black':'white'}}>Clear text is used to clear only the text on the screen and not anything else</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#COPY" aria-expanded="false" aria-controls="flush-collapseTwo"style={{backgroundColor:props.mode=='light'?'white':'#484848',color:props.mode=='light'?'black':'white'}}>
                        Copy Text
                        </button>
                    </h2>
                    <div id="COPY" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode=='light'?'white':'#676767',color:props.mode=='light'?'black':'white'}}>When you copy something, your selection is held on the Clipboard, where it remains until you copy something else or shut down your computer. This means that you can paste the same data multiple times and in different applications. The Clipboard holds only the last selection that you copied.<code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div> <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#RES" aria-expanded="false" aria-controls="flush-collapseTwo"style={{backgroundColor:props.mode=='light'?'white':'#484848',color:props.mode=='light'?'black':'white'}}>
                            Remove Extra Spaces
                        </button>
                    </h2>
                    <div id="RES" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body " style={{backgroundColor:props.mode=='light'?'white':'#676767',color:props.mode=='light'?'black':'white'}}>You use the TRIM function in Excel removes extra spaces from text. It deletes all leading, trailing and in-between spaces except for a single space character between words.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
