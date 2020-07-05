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

  clickHandler = () => {
    this.setState({ loginClicked: true });    
  }
  
  render() {
    return this.state.movies ?
    <main className="App">
      <Route exact path = '/' render = { () =>  <Header onClick={ this.clickHandler } /> }/>
      <Route exact path = '/' render = { () =>  <Movies movies={ this.state.movies} /> }/>
      <Route exact path = '/login' render = { () =>  <Header onClick={ this.clickHandler } /> }/>
      <Route exact path = '/login' render =  { () => <LogInPage /> }/>
    </main>
    :
    <ErrorHandlePage />
  }
}


export default App;
