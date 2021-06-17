import {
    ALL_JOCKEY_INFO,
    ALL_JOCKEY_INFO_FAIL,
    JOCKEY_INFO,
    JOCKEY_INFO_FAIL
} from '../types';

const initialState = {
    jockeys: [],
    jockeyid:0,
    name: "",
    years_of_exp: "",
    horse_club: ""
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ALL_JOCKEY_INFO:
            return {
                ...state,
                jockeys: action.payload
            }
        case ALL_JOCKEY_INFO_FAIL:
            return state;
        case JOCKEY_INFO:
            return {
                ...state,
                jockeyid:0,
                name: "",
                years_of_exp: "",
                horse_club: ""
            }
        case JOCKEY_INFO_FAIL:
            return state;
        default:
            return state;
    }
}