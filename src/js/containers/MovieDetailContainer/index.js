import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

const mapStoreToProps = store => {
  return {
    title: store.movieData.title,
    movies: store.movieData.movies,
    movieInfo: store.movieData.movieInfo
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);