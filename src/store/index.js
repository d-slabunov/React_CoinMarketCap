import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  return createStore(reducers, {}, applyMiddleware(thunk));
}

export const store = configureStore();
