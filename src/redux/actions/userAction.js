import {
    LOADING_USER,
    AUTHENTICATE,
    LOGIN_ERROR,
    SET_EMPLOYEE,
    LOGOUT,
    SIGNUP_USER,
    SIGNUP_ERROR
} from '../types';
import axios from 'axios';

// Logs user in
export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_USER});

    const username = userData.username;
    const password = userData.password;

    axios
        .get(`/users/login.php?username='${username}'&password='${password}'`)
        .then((res) => {
            dispatch({
                type: AUTHENTICATE,
                payload: username
            });
            console.log("Authenticated");
            history.push('/customer');
        })
        .catch((err) => {
            dispatch({type: LOGIN_ERROR});
        });
}

// Switch customer/employee status on login page
export const setEmployee = (isEmployee) => (dispatch) => {
    dispatch({
        type: SET_EMPLOYEE,
        payload: isEmployee
    });
}

// Log user out
export const logoutUser = () => (dispatch) => {
    dispatch({type: LOGOUT});
}

// Signs user up
export const signupUser = (userData) => (dispatch) => {
    dispatch({type: LOADING_USER});

    axios
        .post('/customer/signup.php', userData)
        .then((res) => {
            dispatch({
                type: SIGNUP_USER,
                payload: userData
            });
        })
        .catch((err) => {
            dispatch({type: SIGNUP_ERROR});
        });
}
