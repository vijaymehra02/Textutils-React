
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navebar(props) {

    const [modepera, setmodepera] = useState('Dark Mode');
    const [modenav, setmodenav] = useState({
        color: 'black',
        backgroundColor: '#aa9f9f',
    });
    const modeperaf = () => {
        if (props.mode === 'light') {
            setmodenav({
                color: 'white',
                backgroundColor: '#100b0b',

            });
            setmodepera("Dark Mode");
        } else {
            setmodenav({
                color: 'black',
                backgroundColor: '#aa9f9f',

            });
            setmodepera("Light Mode");
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={modenav}>
                <div className="container-fluid">
                    <div className='d-flex'>
                    <a className="navbar-brand" style={modenav} href="#">{props.tital}</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row ">
                        <li className="nav-item">
                            <Link className="nav-link active" style={modenav} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link active" style={modenav} aria-current="page" to="/About">About</Link>
                        </li>
                    </ul>
                    </div>

                    <div className="d-flex justify-content-between" id="navbarSupportedContent">

                        <div className="form-check form-switch my-auto">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggelmode} onChange={modeperaf} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" > {modepera} </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
