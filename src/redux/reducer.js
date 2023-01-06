import * as types from "./actionType";

const initialState = {
  posts: [],
  user: [],
  loading: false,
  show: false,
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_START:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case types.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case types.SHOW_SUCCESS:
      return {
        ...state,
        show: true,
        user: action.payload
      };
    case types.SHOW_FAIL:
      return {
        ...state,
        show: false,
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default postReducer;
