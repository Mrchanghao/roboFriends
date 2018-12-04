
export const SET_SEARCH_FIELD = 'SET_SEARCH_FIELD'
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL'

export const setSearchField = (text) => {
  return {
    type: SET_SEARCH_FIELD,
    payload: text
  }
};

const requestSuccess = (persons) => {
  return {
    type: REQUEST_SUCCESS,
    payload: persons
  }
}

const requestFail = (error) => {
  return {
    type: REQUEST_FAIL,
    payload: error
  }
}

export const requestPersons = () => async dispatch => {
    dispatch({type: REQUEST_START});
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const persons = await res.json();
      dispatch(requestSuccess(persons));
    } catch (error) {
      dispatch(requestFail(error))
    }

}