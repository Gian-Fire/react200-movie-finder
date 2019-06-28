const axios = require('axios');

export const updateSearchInput = (title) => {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    payload: title 
  }
}

export const getMovie = (title) => {
  return {
    type: 'GET_MOVIE',
    payload: axios.get(`/movies/${title}`)
  }
}

export const getInfo = (id) => {
  return {
    type: 'GET_INFO',
    payload: axios.get(`/movie/${id}`)
  }
}