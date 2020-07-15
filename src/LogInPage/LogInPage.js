import React, { Component } from 'react';
import './LogInPage.css';
import { postLogin, getFavoriteMovies } from '../FetchedData/FetchedData'
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
            userFavorites: null,
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
            // this.props.history.push('/')                                   
            } catch(error) {
                this.setState({ error: error })
                // alert('Incorrect email or password!')
                // this.props.history.push('/login')
            }                        
        }

        async putUserRatingsInState() {
            const userRatings = await getUserRatings()
            
            return userRatings
        }

        async putUserFavoritesInState() {
            const userFavorites =  await getFavoriteMovies()            
            console.log(userFavorites);
            
            return userFavorites
            
        }

        componentDidMount() {
            this.putUserRatingsInState()
                .then(data => this.setState({
                    userRatings: data.ratings
                }))
                .then(data => console.log(this.state))
                .catch(err => console.error(err))
            this.putUserFavoritesInState()
                .then(data => this.setState({
                    userFavorites: data.favorites
                }))
        }
        
        render () {             
            return (
                <section 
                    className="main-login"
                    data-testid="main-login"
                >
                <form 
                    className ="login-form"
                    data-testid="login-form"
                    >
                    <h2 data-testid="greeting">Welcome Back</h2>
                    <input 
                        name='email' 
                        value={ this.state.value } 
                        onChange={ this.changeHandler }
                        type='text' 
                        placeholder='email address'
                        data-testid='email-input'
                    >
                    </input>
                    <input 
                    name='password'  
                    value={ this.state.value } 
                    onChange={ this.changeHandler }
                    type='text' 
                    placeholder='password'
                    data-testid = 'password-input'
                    >
                    </input>
                    <button
                        onClick={ this.clickHandler  } 
                        data-testid = 'login-button'
                    >
                        <Link to='/users/63' className='user-page'>Login</Link>
                    </button>
                </form>
            </section>
        )
    }
}

export default LogInPage