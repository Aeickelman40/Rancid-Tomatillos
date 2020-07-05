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

// getMovieData() {
//   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         throw new Error({ ...response })
//       }
//     })
//     .then(movies => {
//       console.log(movies);
//       this.setState({ movies: movies, error: '' })
//     })
//   .catch(error => {
//     console.log(error)
//     this.setState({error: 'Error Message Goes Here'})
//    })
//   }

  // componentDidMount() {
  //   let movieData = <FetchedData />
  //   console.log(movieData.FetchedData)
  //   this.setState({ movies: movieData, error: '' })
  //   console.log(this.state)
  //   // this.getMovieData();
  // }

    componentDidMount = async () => {
    try {
      const movies = await getMovies();
      this.setState({ movies: movies });
    } catch(error) {
      this.setState({error: error});
    }
  }

  clickHandler = () => {
    this.setState({ loginClicked: true });    
  }
  
  render() {
    console.log(this.state)
    return this.state.movies ?
    <main className="App">
      {/* <Header 
        onClick = { this.clickHandler } 
        loginClicked = { this.state.loginClicked }
      /> */}
      <Route exact path = '/' render = { () =>  <Header onClick={ this.clickHandler } /> }/>
      <Route exact path = '/' render = { () =>  <Movies moviesData={ this.state.movies} /> }/>
      <Route exact path = '/login' render =  { () => <LogInPage /> }/>
    </main>
    :
    <ErrorHandlePage />
  }
}


export default App;
