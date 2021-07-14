import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // // Search Users
  // const searchUsers = async (text) => {
  //   setLoading();
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&clien_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   dispatch({
  //     type: SEARCH_USERS,
  //     payload: res.data.items,
  //   });
  // };

  // // Get User

  // const getUser = async (username) => {
  //   setLoading();
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?clien_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   dispatch({
  //     type: GET_USER,
  //     payload: res.data,
  //   });
  // };

  // // Get Repos
  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&clien_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   dispatch({
  //     type: GET_REPOS,
  //     payload: res.data,
  //   });
  // };

  // // Clean Users

  // const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // // Set Loading
  // const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
