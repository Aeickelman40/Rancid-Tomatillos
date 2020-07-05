import React, { Component } from 'react';
import './LogInPage.css';
import { postLogin } from '../FetchedData/FetchedData'
import { NavLink } from 'react-router-dom';




class LogInPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '', 
            userName: props.userInfo.userName,
            userId: props.userInfo.userId,
        }
    }

    changeHandler = (event)  => {
            const { name, value } = event.target        
            this.setState({ [name]: value })
    }

    clickHandler = async (event) => {
        event.preventDefault()        
        const { email, password } = this.state
        try {
            const login = await postLogin(email, password);    
            const {id, name } = login.user
            this.setState({ userId: id, userName: name })                        
            } catch(error) {
                this.setState({ error: error })
            }
        }
        
        
        render () {     
            console.log('login render');
               
            return (
                <section className="main-login">
                <form className = 'login-form'>
                    <h2>Welcome Back</h2>
                    <input 
                        name='email' 
                        value={ this.state.value } 
                        onChange={ this.changeHandler }
                        type='text' 
                        placeholder='email address'>
                    </input>
                    <input 
                    name='password'  
                    value={ this.state.value } 
                    onChange={ this.changeHandler }
                    type='text' 
                    placeholder='password'></input>
                    <button
                        onClick={ this.clickHandler  }
                    >
                    <NavLink to='/users/63' className='user-page'>Login</NavLink>
                    </button>
                </form>
            </section>
        )
    }
}

export default LogInPage