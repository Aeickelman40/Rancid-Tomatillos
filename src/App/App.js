import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import ErrorHandlePage from '../ErrorHandlePage/ErrorHandlePage';
import Header from '../Header/Header'
import ExpandedMovie from '../ExpandedMovie/ExpandedMovie'
import './App.css';
import LogInPage from '../LogInPage/LogInPage';
import { Route, NavLink, match, Switch } from 'react-router-dom';
import { getMovies } from '../FetchedData/FetchedData'

class App extends Component {
  constructor() {
   super();
   this.state = {
      loginClicked: false,
      isLoggedIn: false,
      isMovieExpanded: false,
      movieIsLoaded: false,
      userInfo: {
        userRatings: null,
        userEmail: '',
        userId: '',
        userName: 'Guest',
      },
   };
  }

  componentDidMount = async () => {
    try {
      const movies = await getMovies();
      this.setState({ movies: movies });
    } catch(error) {
      this.setState({ error: error });
    }
  }

  clickHandler = (event) => {
    const { name, value } = event.target
    this.setState({ 
      [name]: value
    });
  }
  
  userLoggedIn = () => {
    this.state.isLoggedIn ?
    this.setState({
      isLoggedIn: false,
      userInfo: {
        userName: 'Guest'
      }
    }) : 
    this.setState({
      isLoggedIn: true
    })
  }

  movieDidLoad = () => {
    this.setState({
      movieIsLoaded: true
    })
  }

  appState = (userData) => { 
    this.setState({ 
      userInfo: {
        userId: userData.userId ,
        userName: userData.userName,
        userRatings: userData.userRatings
      }
    })    
  }

  render() {  
    console.log('app state', this.state);
    
    return this.state.movies ?
    <main className="App">
      <Route path = '/' render = { () =>  <Header onClick={ this.clickHandler } appState={ this.state } /> }/>
      <Route exact path = '/' render = { () =>  <Movies movies={ this.state.movies} onClick={ this.clickHandler } appState={ this.state } /> }/>
      <Route exact path = '/login' render =  { () => <LogInPage userInfo={ this.state.userInfo } updateAppState={ this.userLoggedIn } appState={ this.appState }/> }/>
      <Route exact path = '/users/63' render =  { () => <Movies movies={ this.state.movies} onClick={ this.clickHandler } appState={ this.state } /> }/>
      <Route exact path = '/movie/:id' render =  { ({match}) => <ExpandedMovie {...match} movieDoneLoading= { this.movieDidLoad } appState = { this.state }/> } />
    </main>
    :
    <ErrorHandlePage />
  }
}


export default App;
