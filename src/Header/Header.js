import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';
// import { render } from '@testing-library/react';
import { Route, NavLink, BrowserRouter} from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage';
import App from '../App/App';


function Header(props) { 
    console.log(props)
    if (props.appState.isLoggedIn === false) { 
    return (
        <BrowserRouter>
            <header className = "main-header">
             <img src={tomato} alt="cartoon tomato"></img> 
    <h2>Welcome to Rancid Tomatillos (not affiliated with Rotten Tomatoes)</h2> 
             <section className = "button-container">
                 <button className='login-button' onClick={ props }>
                     <NavLink to='/login' className='login'>Login</NavLink>
                 </button>
                 <button className='home-button' onClick={ props }>
                     <NavLink to='/' className='home'>Home</NavLink>
                 </button>
                </section>
            </header>
        </BrowserRouter>
    )
    } else {
    return (
             <BrowserRouter>
            <header className = "main-header">
             <img src={tomato} alt="cartoon tomato"></img> 
    <h2>Welcome back to Rancid Tomatillos (not affiliated with Rotten Tomatoes)</h2> 
             <section className = "button-container">
                 <button className='logout-button' onClick={ props }>
                     <NavLink to='/' className='logout'>Logout</NavLink>
                 </button>
                 <button className='home-button' onClick={ props }>
                     <NavLink to='/' className='home'>Home</NavLink>
                 </button>
                </section>
            </header>
        </BrowserRouter>
    )
    } 
}

export default Header