import { combineReducers } from 'redux';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return {...state, isLoading: true, error: null};
    case 'LOADING_DATA_SUCCESS':
      return {...state, data: action.payload, isLoading: false};
    case 'LOADING_DATA_FAIL':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export const reducers = combineReducers({ usersReducer });
