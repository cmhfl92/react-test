import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e13c7dab64eeecd78da1fa8b038a9c23&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          {/* change logo later */}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route path="/test" component={Test} />
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    </Router>
    );
  }
}


export default App;

const Test = () => (
  <h1>TEST</h1>
);
