import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from './setAuthToken';

/**
 * Registartion post Request
 */
export const RegisterNewUser = (userData, history) => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login')) // re-direct to login on successful register
    .catch(err => console.log(err.response));
};

/**
 * Login Request
 */
export const setCurrentUser = (decoded, context) => {
  console.log('Context ==>', context);
  context.setAuth(true);
  context.setUserData(decoded);
};

// Login - get user token
export const loginUser = (userData, history, context) => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      console.log('Response', token);
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);

      // Set current user
      // context.setUserData(decoded);
      // context.setAuth(true);

      setCurrentUser(decoded, context);
      //
      history.push('/home');

      //
    })
    .catch(err => {
      console.log(err.response.data);
      context.setError(err.response.data);
    });
};

/**
 *
 * set auth token
 */

// Log user out
export const logoutUser = context => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  context.setAuth(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  // setCurrentUser({});
};
