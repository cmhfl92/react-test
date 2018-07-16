import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'Edward Scissorhands',
    desc: 'Johnny Depp'
  },
  {
    id: 2,
    title: 'Green Mile'
  },
  {
    id: 3,
    title: 'Django'
  },
  {
    id: 4,
    title: 'Titanic'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* change logo later */}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />
          )}
      </div>
    );
  }
}


export default App;
