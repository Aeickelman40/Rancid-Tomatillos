import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';
// import { render } from '@testing-library/react';
import { Route, NavLink, BrowserRouter} from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage';
import App from '../App/App';


function Header(props) {    
    return (
        <BrowserRouter>
            <header 
                className = "main-header"
            >
             <img src={tomato} alt="cartoon tomato"></img> 
             <h2>Hello Guest</h2> 
             <section className = "button-container">
                <NavLink to = '/login' className = 'login-page'>
                   <button onClick = { props.onClick }>Login</button>
             </NavLink>
                {/* Home page button currently runs a render loop */}
                <NavLink to = '/' className = 'home-page' >
                   <button>Home</button>
             </NavLink>
                <Route path= '/LogInPage' render = { () => <LogInPage />}/>
                <Route exact path = '/' render = { () =>  <App  />} />
                </section>
            </header>
        </BrowserRouter>
    )
}

export default Header