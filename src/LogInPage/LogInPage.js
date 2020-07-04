import React from 'react';
import './LogInPage.css';


function LogInPage() {;
    return (
        <section className="main-login">
            <form className = 'login-form'>
                <h2>Welcome Back</h2>
                <input type='text' placeholder='email address'></input>
                <input type='text' placeholder='password'></input>
                <button>Login</button>
            </form>
        </section>
    )
}

export default LogInPage