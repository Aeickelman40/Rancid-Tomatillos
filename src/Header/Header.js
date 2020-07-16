import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header(props) { 
    const { userInfo, isLoggedIn } = props.appState
    const { onClick } = props
    // const { isLoggedIn } = props.appState
    return (
            <header 
                className = "main-header"
                data-testid="main-header"
                >
            <section className='header-image-container'>
                <img src={tomato} alt="cartoon tomato"></img> 
            </section>  
    <h2>Welcome {userInfo.userName}</h2> 
             <section className = "button-container">
                 <button 
                    name="loginClicked" 
                    className='login-button' 
                    onClick={ onClick }
                    data-testid="login-button"
                >
                { isLoggedIn ? 
                <NavLink to='/' className='logout'  name="loginClicked">Logout</NavLink> :
                <NavLink to='/login' className='login' name="loginClicked">Login</NavLink> 
                 }                     
                 </button>
                 <button 
                    name="home" 
                    className='home-button' 
                    onClick={ onClick }
                    data-testid='home-button'>
                     <NavLink to='/' className='home'>Home</NavLink>
                 </button>
                </section>
            </header>
    )
}

export default Header