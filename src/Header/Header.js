import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';
// import { render } from '@testing-library/react';
import { Route, NavLink, BrowserRouter} from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage';
import App from '../App/App';


function Header(props) { 
    const {userInfo}=props.appState
    const clickHandler = props.onClick
    
    if (props.appState.isLoggedIn === false) { 
    return (
        <BrowserRouter>
            <header className = "main-header">
             <img src={tomato} alt="cartoon tomato"></img> 
    <h2>Welcome {userInfo.userName}</h2> 
             <section className = "button-container">
                 <button name="loginClicked" className='login-button' onClick={ props }>
                     <NavLink to='/login' className='login' name="loginClicked">
                         Login</NavLink>
                 </button>
                 <button name="home" className='home-button' onClick={ props }>
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
    <h2>Welcome back {userInfo.userName}</h2> 
             <section className = "button-container">
                 <button name="loginClicked" className='logout-button' onClick={ (event) => clickHandler(event) }>
                     <NavLink to='/' className='logout'>Logout</NavLink>
                 </button>
                 <button name="home" className='home-button' onClick={ props }>
                     <NavLink to='/' className='home'>Home</NavLink>
                 </button>
                </section>
            </header>
        </BrowserRouter>
    )
    } 
}

export default Header