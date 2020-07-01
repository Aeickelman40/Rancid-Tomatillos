import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';


function Header() {
    return (
        <header className = "main-header">
            <img src={tomato} alt="cartoon tomato"></img> 
            <h2 > Hello Guest</h2> 
            <section className = "button-container">
            <button>Login</button>
            <button>Home</button> 
            </section>
        </header>
    )
}

export default Header