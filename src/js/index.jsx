import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import searchReducer from './containers/MovieSearchContainer/searchReducer';
import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movieData: searchReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
