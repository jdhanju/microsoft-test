// store.js

import { createStore } from 'redux';

// Define the initial state
const initialState = {
  fileContent: '',
};

// Define action types
const SET_FILE_CONTENT = 'SET_FILE_CONTENT';

// Define action creators
export const setFileContent = (content) => ({
  type: SET_FILE_CONTENT,
  payload: content,
});

// Define the reducer
const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILE_CONTENT:
      return { ...state, fileContent: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(fileReducer);

export default store;