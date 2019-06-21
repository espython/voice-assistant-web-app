import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from './setAuthToken';

/**
 * Registartion post Request
 */
const Register = (userData, history) => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login')) // re-direct to login on successful register
    .catch(err => console.log(err));
};

/**
 * Login Request
 */

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err));
};

/**
 *
 * set auth token
 */

export const setCurrentUser = decoded => console.log('Decode', decoded);

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
