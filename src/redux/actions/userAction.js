import {
    LOADING_USER,
    AUTHENTICATE,
    LOGIN_ERROR,
    SET_EMPLOYEE,
    LOGOUT,
    SIGNUP_USER,
    SIGNUP_ERROR,
    CUSTOMER_INFO,
    CUSTOMER_INFO_FAIL
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
            console.log("Authenticated");
            dispatch(fetchInitialCustomerInfo(username, history));
        })
        .catch((err) => {
            dispatch({type: LOGIN_ERROR});
        });
}

export const fetchInitialCustomerInfo = (username, history) => (dispatch) => {    
    axios
        .get(`/customer/customerInfo.php?username='${username}'`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: CUSTOMER_INFO,
                payload: res.data
            });
            history.push('/customer');
            dispatch({
                type: AUTHENTICATE,
                payload: username
            });
        })
        .catch((err) => {
            dispatch({
                type: CUSTOMER_INFO_FAIL
            })
        })
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
export const signupUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_USER});

    axios
        .post('/customer/signup.php', userData)
        .then((res) => {
            dispatch(fetchInitialCustomerInfo(userData.username, history))
            dispatch({
                type: SIGNUP_USER,
                payload: userData
            });
        })
        .catch((err) => {
            dispatch({type: SIGNUP_ERROR});
        });
}
