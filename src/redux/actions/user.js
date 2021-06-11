import {
    LOADING_USER,
    AUTHENTICATE,
    LOGIN_ERROR,
    SET_EMPLOYEE,
    LOGOUT
} from '../types';
import axios from 'axios';

// Logs user in
export const loginUser = (userData) => (dispatch) => {
    dispatch({type: LOADING_USER});

    const username = userData.username;
    const password = userData.password;

    axios
        .get(`/user/login.php?username='${username}'&password='${password}'`)
        .then((res) => {
            dispatch({type: AUTHENTICATE});
            console.log("Authenticated");
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
export const logoutUser = (dispatch) => {
    dispatch({type: LOGOUT});
}

// Signs user up
export const signupUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_USER});
}
