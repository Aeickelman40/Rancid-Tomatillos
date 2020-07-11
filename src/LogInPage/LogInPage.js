import React, { Component } from 'react';
import './LogInPage.css';
import { postLogin } from '../FetchedData/FetchedData'
import { Link } from 'react-router-dom';
import { getUserRatings } from '../FetchedData/FetchedData'


class LogInPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '', 
            userName: props.userInfo.userName,
            userId: props.userInfo.userId,
            userRatings: null,
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
            this.state.UpdateAppState({userId: id, userName: name, userRatings: this.state.userRatings})            
            this.setState({ userId: id, userName: name, userRatings: this.state.userRatings })                                    
            } catch(error) {
                this.setState({ error: error })
            }                        
        }

        async putUserRatingsInState() {
            const userRatings = await getUserRatings()
            return userRatings
        }

        componentDidMount() {
            this.putUserRatingsInState()
                .then(data => this.setState({
                    userRatings: data.ratings
                }))
                .then(data => console.log(this.state))
                .catch(err => console.error(err))
        }
        
        render () { 
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
                        onClick={ this.clickHandler  } >
                        <Link to='/users/63' className='user-page'>Login</Link>
                    </button>
                </form>
            </section>
        )
    }
}

export default LogInPage