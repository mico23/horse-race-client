import {
    ALL_HORSE_INFO,
    ALL_HORSE_INFO_FAIL,
    HORSE_INFO,
    HORSE_INFO_FAIL
} from '../types';

const initialState = {
    horses: [],
    curHorseID:0,
    curNickename:"",
    curODDs: 0,
    curBreed:"",
    curNumraces: 0,
    curAge:0
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ALL_HORSE_INFO:
            return {
                ...state,
                horses: action.payload
            }
        // to be updated to set default values
        case ALL_HORSE_INFO_FAIL:
            return state;
        case HORSE_INFO:
            return {
                ...state,
                curHorseID: action.payload.nickename,
                curNickename: action.payload.nickename,
                curODDs:  action.payload.odds,
                curBreed: action.payload.breed,
                curNumraces: action.payload.number_of_races,
                curAge: action.payload.age
            }
        case HORSE_INFO_FAIL:
            return state;
        default:
            return state;
    }
}