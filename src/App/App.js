import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import ErrorHandlePage from '../ErrorHandlePage/ErrorHandlePage';
import Header from '../Header/Header'
import './App.css';
import LogInPage from '../LogInPage/LogInPage';
import { Route, NavLink } from 'react-router-dom';
import { getMovies } from '../FetchedData/FetchedData'

class App extends Component {
  constructor() {
   super();
   this.state = {
      loginClicked: false,
      isLoggedIn: false,
      userInfo: {
        userEmail: '',
        userId: '',
        userName: 'Guest',
      }
   };
  }

  componentDidMount = async () => {
    try {
      const movies = await getMovies();
      this.setState({ movies: movies });
      // this.setState({ userName })
    } catch(error) {
      this.setState({ error: error });
    }
  }

  clickHandler = () => {
    this.setState({ 
      loginClicked: true
    });
  }
  
  userLoggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  appState = (userData) => {   
    this.setState({ 
      userInfo: {
        userId: userData.userId ,
        userName: userData.userName
      }
    })
  }

  render() {  
    console.log(this.state)  
    return this.state.movies ?
    <main className="App">
      <Route path = '/' render = { () =>  <Header onClick={ this.clickHandler } appState={ this.state } /> }/>
      <Route exact path = '/' render = { () =>  <Movies movies={ this.state.movies} /> }/>
      <Route exact path = '/login' render =  { () => <LogInPage userInfo={ this.state.userInfo } updateAppState={ this.userLoggedIn } appState={ this.appState }/> }/>
      <Route exact path = '/users/63' render =  { () => <Movies movies={ this.state.movies} /> }/>
    </main>
    :
    <ErrorHandlePage />
  }
}


export default App;
