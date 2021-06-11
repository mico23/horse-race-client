import {
    LOADING_USER,
    AUTHENTICATE,
    LOGIN_ERROR,
    SET_EMPLOYEE,
    LOGOUT
} from '../types';

const initialState = {
    authenticated: false,
    loading: false,
    loginError: false,
    isEmployee: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_USER:
            return {
                ...state,
                loading: true
            };
        case AUTHENTICATE:
            return {
                ...state,
                loading: false,
                authenticated: true,
                loginError: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                loginError: true
            };
        case SET_EMPLOYEE:
            return {
                ...state,
                isEmployee: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: false
            }
        default:
            return state;
    }
}
