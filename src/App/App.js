import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import ErrorHandlePage from '../ErrorHandlePage/ErrorHandlePage';
import Header from '../Header/Header'
import './App.css';
import LogInPage from '../LogInPage/LogInPage';
import { Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor() {
   super();
   this.state = {
      loginClicked: false
   };
  }

getMovieData() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error({ ...response })
      }
    })
    .then(movies => {
      console.log(movies);
      this.setState({ movies: movies, error: '' })
    })
  .catch(error => {
    console.log(error)
    this.setState({error: 'Error Message Goes Here'})
   })
  }

  componentDidMount() {
    this.getMovieData();
  }

  clickHandler = () => {
    this.setState({ loginClicked: true });    
  }
  
  render() {
    return this.state.movies ?
    <main className="App">
      <Header 
        onClick = { this.clickHandler } 
        loginClicked = { this.state.loginClicked }
      />
      <Route exact path = '/' render = { () =>  <Movies moviesData={ this.state.movies} /> }/>
      <Route exact path = '/login' render =  { () => <LogInPage /> }/>
    </main>
    :
    <ErrorHandlePage />

  }
}


export default App;
