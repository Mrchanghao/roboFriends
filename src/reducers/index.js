import {combineReducers} from 'redux';
import { SET_SEARCH_FIELD, REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions';

const initialState = {
  searchField: '',
};

const initialPerson = {
  loading: false,
  persons: [],
  error: null,
}

function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};



function personsReducer(state = initialPerson, action) {
  switch(action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        persons: action.payload
      }
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        persons: [],
        error: action.payload
      }

    default:
      return state;
  }
}

const reducers = combineReducers({
  search: searchReducer,
  persons: personsReducer
});

export default reducers;