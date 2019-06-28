import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

const mapStoreToProps = store => {
  return {
    title: store.movieData.title,
    movies: store.movieData.movies
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);