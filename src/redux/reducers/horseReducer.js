import {
    HORSE_INFO,
    HORSE_INFO_FAIL
} from '../types';

const initialState = {
    horses: [],
    curNickename:"",
    curHorseID:0,
    curBreed:"",
    curAge:0,
    curNumraces: 0
}

export default function (state = initialState, action) {
    switch(action.type) {
        case HORSE_INFO:
            return {
                ...state,
                horses: action.payload
            }
        // to be updated to set default values
        case HORSE_INFO_FAIL:
            return state;
        default:
            return state;
    }
}