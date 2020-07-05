import React, { Component } from 'react';
import './LogInPage.css';


class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            emailAddress: '',
            passWord: ''
        }
    }

    changeHandler = (event)  => {
        const { name, value } = event.target        
        this.setState({ [name]: value })
    }

    clickHandler = (event) => {
        event.preventDefault()
        
    }

    render () {
        return (
            <section className="main-login">
                <form className = 'login-form'>
                    <h2>Welcome Back</h2>
                    <input 
                        name='emailAddress' 
                        value={ this.state.value } 
                        onChange={this.changeHandler}
                        type='text' 
                        placeholder='email address'>

                    </input>
                    <input 
                    name='passWord'  
                    value={this.state.value} 
                    onChange={this.changeHandler}
                    type='text' 
                    placeholder='password'></input>
                    <button
                        onClick={ this.clickHandler  }
                    >Login</button>
                </form>
            </section>
        )
    }
}

export default LogInPage