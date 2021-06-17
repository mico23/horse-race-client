import {
    ALL_STADIUM_INFO,
    ALL_STADIUM_INFO_FAIL,
    STADIUM_INFO,
    STADIUM_INFO_FAIL
} from '../types';

const initialState = {
    stadiums: [],
    name:"",
    address:"",
    capacity:0
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ALL_STADIUM_INFO:
            return {
                ...state,
                stadiums: action.payload
            }
        case ALL_STADIUM_INFO_FAIL:
            return state;
        case STADIUM_INFO:
            return {
                ...state,
                stadiumName:"",
                address:"",
                capacity:0
            }
        case STADIUM_INFO_FAIL:
            return state;
        default:
            return state;
    }
}