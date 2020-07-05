import React, { Component } from 'react';
import './LogInPage.css';
import { postLogin } from '../FetchedData/FetchedData'


class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (event)  => {
        const { name, value } = event.target        
        this.setState({ [name]: value })
    }

    clickHandler = async (event) => {
        event.preventDefault()
        try {
            const login = await postLogin();
            this.setState({ email: login.email, password: login.password })
        } catch(error) {
            this.setState({ error: error })
        }
    }

    render () {
        console.log(this.state)
        return (
            <section className="main-login">
                <form className = 'login-form'>
                    <h2>Welcome Back</h2>
                    <input 
                        name='email' 
                        value={ this.state.value } 
                        onChange={this.changeHandler}
                        type='text' 
                        placeholder='email address'>

                    </input>
                    <input 
                    name='password'  
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