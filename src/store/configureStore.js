import { createStore, combineReducers, compose } from 'redux';

import gameReducer from './reducers/game';

const rootReducers = combineReducers({
  game: gameReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducers, composeEnhancers());
};

export default configureStore;