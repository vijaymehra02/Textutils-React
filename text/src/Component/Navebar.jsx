
import React , {useState} from 'react'

export default function Navebar(props) {

    const [modepera , setmodepera] = useState('Enable Dark Mode');
    const [mode , setmode] = useState('disabled');
    const [modetoggle , setmodetoggle] = useState({
        color : 'black',
        backgroundColor : 'white',
    });

    const toggle = () =>{

        if(mode === 'disabled'){
            setmode('checked');
            setmodepera('Enable Light Mode');
            setmodetoggle({
                color : 'white',
                backgroundColor : 'black',
            })
        }else{
            setmode('disabled');
            setmodepera('Enable Dark Mode');
            setmodetoggle({
                color : 'black',
                backgroundColor : 'white',
            })
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={modetoggle}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={modetoggle} href="#">{props.tital}</a>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={modetoggle} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={modetoggle} aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggle} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"  >{modepera}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
