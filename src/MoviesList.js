import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {
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
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}


export default MoviesList;

const MovieGrid = styled.div `
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 5px;
`;
