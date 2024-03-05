
import React , {useState} from 'react'

export default function Navebar(props) {

    const [modepera , setmodepera] = useState('Enable Dark Mode');
    const [modenav , setmodenav] = useState({
        color : 'black',
       backgroundColor:'#aa9f9f',
    });
    const modeperaf = () =>{
        if(props.mode === 'light'){
            setmodenav({
                color : 'white',
                backgroundColor : '#100b0b',
    
              });
            setmodepera("Enable Dark Mode");
        }else{    
            setmodenav({
                color : 'black',
               backgroundColor:'#aa9f9f',
    
              });
            setmodepera("Enable Light Mode");
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={modenav}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={modenav} href="#">{props.tital}</a>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={modenav} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={modenav} aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggelmode } onChange={modeperaf} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" > {modepera} </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
