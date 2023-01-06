import * as types from "./actionType";
import axios from "axios";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START
});

const fetchPostSuccess = (posts) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts
});

const fetchPostFail = (error) => ({
  type: types.FETCH_POST_FAIL,
  payload: error
});

const showSuccess = (user) => ({
  type: types.SHOW_SUCCESS,
  payload: user
});

const showFail = (error) => ({
  type: types.SHOW_FAIL,
  payload: error
});


function fetchPosts() {
  const url = "https://reqres.in/api/users/";
  return function (dispatch) {
    dispatch(fetchPostStart());
    axios
      .get(url)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error));
      });
  };
}

function showUser(id) {
  const url = "https://reqres.in/api/users/" + id.toString();
  return function (dispatch) {
    // dispatch(showSuccess());
    axios
      .get(url)
      .then((response) => {
        const user = response.data;
        dispatch(showSuccess(user));
      })
      .catch((error) => {
        dispatch(showFail(error));
      });
  };
}


export {
  fetchPosts,
  showUser,
};