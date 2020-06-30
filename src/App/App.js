import React from 'react';
import tomato from '../images/tomImage.png';
import './App.css';

function App() {
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

export default App;
