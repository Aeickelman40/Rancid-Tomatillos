import React, { Component } from 'react';
import tomato from '../images/tomImage.png';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
   super();
   this.state = {}; 
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
    console.error(error)
   })
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
  return (
    <div className="App">
      <header className="main-header">
        <img src={tomato}></img>
        <h2>Hello Guest</h2>
        <section className="button-container">
          <button>Login</button>
          <button>Home</button>
        </section>
      </header>
    </div>
  );
  }
}


export default App;
