import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';
import { render } from '@testing-library/react';
import { Route, NavLink} from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage';
import App from '../App/App';


function Header(props) {    
    return (
        <header 
            className = "main-header"
        >
            <img src={tomato} alt="cartoon tomato"></img> 
            <h2 > Hello Guest</h2> 
            <section className = "button-container">
            {/* {* <button>Login</button> */
            /* <button>Home</button>  */}
            <NavLink to = '/login' className = 'login-page'>
                <button onClick = { props.onClick }>Login</button>
            </NavLink>
            <NavLink to = '/' className = 'home-page' >
                <button>Home</button>
            </NavLink>
            <Route path= '/LogInPage' render = { () => <LogInPage />}/>
            {/* <Route exact path = '/' render = { () =>  <App  />} /> */}
            </section>
        </header>
    )
}

export default Header