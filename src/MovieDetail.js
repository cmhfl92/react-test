import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie.js';
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=e13c7dab64eeecd78da1fa8b038a9c23&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie: movie,
      })
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}> 
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>Release Date: {movie.release_date}</h3>
            <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
    );
  }
}


export default MovieDetail

const MovieWrapper = styled.div `
  position: relative;
  padding-top: 65vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div `
  background: white;
  font-family: 'Slabo 27px', serif;
  text-align: left;
  padding: 10px 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
  p {
    font-family: 'Raleway', sans-serif;
  }
`;
