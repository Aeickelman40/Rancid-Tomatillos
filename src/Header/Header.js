import React from 'react'
import tomato from '../images/tomImage.png';
import './Header.css';
// import { render } from '@testing-library/react';
import { Route, NavLink, BrowserRouter} from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage';
import App from '../App/App';


// function Header(props) {
//     console.log(props.loginClicked)           
//     return (
//         <BrowserRouter>
//             <section 
//                 className = "main-header"
//             >
//              <img src={tomato} alt="cartoon tomato"></img> 
//              <h2>Hello Guest</h2> 
//              <section className = "button-container">
//                    <button onClick = { props.onClick }>
//                         <NavLink to = '/login' className = 'login-page'></NavLink>
//                         Login
//                    </button>
//                 {/* Home page button currently runs a render loop */}
//                 <NavLink to = '/' className = 'home-page' >
//                    <button>Home</button>
//                 </NavLink>
//                 </section>
//             </section>
//         </BrowserRouter>
//     )
// }
function Header(props) {    
    return (
        <BrowserRouter>
            <header className = "main-header">
             <img src={tomato} alt="cartoon tomato"></img> 
             <h2>Hello Guest</h2> 
             <section className = "button-container">
                 {//Is this syntax correct?}
                <NavLink to = '/login'  href='/login' className = 'login-page'/>
               <a href='/login' className='login-page'>
                   <button>Login</button>
               </a>
                <NavLink to = '/' className = 'home-page' >
                   <button>Home</button>
                </NavLink>
                </section>
            </header>
        </BrowserRouter>
    )
}

export default Header