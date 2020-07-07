import React, { Component } from 'react';
import './LogInPage.css';
import { postLogin } from '../FetchedData/FetchedData'
import { Link } from 'react-router-dom';

class LogInPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '', 
            userName: props.userInfo.userName,
            userId: props.userInfo.userId,
            updateAppState: props.updateAppState,
            UpdateAppState: props.appState
        }
    }

    changeHandler = (event)  => {
            const { name, value } = event.target        
            this.setState({ [name]: value })
    }

    clickHandler = async (event) => {
        event.preventDefault()  
        this.state.updateAppState();
        const { email, password } = this.state
        try {
            const login = await postLogin(email, password);  
            const {id, name } = login.user
            this.state.UpdateAppState({userId: id, userName: name})
            this.setState({ userId: id, userName: name })                        
            } catch(error) {
                this.setState({ error: error })
            }
        }
        
        render () {   
            console.log('login rendered');
              
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
                    <Link to='/users/63' className='user-page'></Link>
                    Login
                    </button>
                </form>
            </section>
        )
    }
}

export default LogInPage