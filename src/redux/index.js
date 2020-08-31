import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux';
import rootSaga from '../saga'
import reducers from '@/ducks/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createHistory = require('history').createHashHistory();

const sagaMiddleware = createSagaMiddleware({
  onError: (error) => {
    console.error('@ Saga error: ', error);
  }
});

let store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(createHistory)))
);

sagaMiddleware.run(rootSaga);

export default store;