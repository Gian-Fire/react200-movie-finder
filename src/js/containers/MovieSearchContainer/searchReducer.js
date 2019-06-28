const defaultState = {
  title: '',
  movies: [],
  movieInfo: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        title: payload
      }
    }

    case 'GET_MOVIE_FULFILLED': {
      return {
        ...state,
        searchInput: payload.data.Search.Title ,
        movies: payload.data.Search
      }
    }

    case 'GET_INFO_FULFILLED': {
      return {
        ...state,
        movieInfo: payload.data
      }

    }


    default: return state;
  }
}
