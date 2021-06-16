import {
    RACE_STADIUM_INFO,
    RACE_STADIUM_INFO_FAIL,
    RACE_INFO,
    RACE_INFO_FAIL,
    BET_TRUE,
    BET_FALSE,
    SET_RACE_LOCATION,
} from '../types';

import axios from 'axios';

export const fetchRaceStadiumInfo = () => (dispatch) => {
    console.log('fetching race-stadium info');

    axios
        .get(`/race/stadiumInfo.php`)
        .then((res) => {
            // console.log(res.data.records);
            dispatch({
                type: RACE_STADIUM_INFO,
                payload: res.data.records
            });
        })
        .catch((err) => {
            dispatch({
                type: RACE_STADIUM_INFO_FAIL
            })
        })
}

export const fetchRaceInfo = (raceid) => (dispatch) => {
    console.log('fetching race info');
    axios
    .get(`/race/raceInfo.php?raceid=${raceid}`)
    .then((res)=>{
        console.log('priting race info');
        console.log(res.data);
        dispatch({
            type: RACE_INFO,
            payload: res.data.records
        });
    })
    .catch((err) => {
        dispatch({
            type:RACE_INFO_FAIL
        })
    })
}

export const raceInitialFail = () => (dispatch) => {
    dispatch({
        type: RACE_INFO_FAIL
    })
}

export const setRaceLocation = (location) => (dispatch) => {
    dispatch({
        type: SET_RACE_LOCATION,
        payload: location
    })
}


export const setBetTrue = () => (dispatch) => {
    dispatch({
        type: BET_TRUE
    })
}

export const setBetFalse = () => (dispatch) => {
    dispatch({
        type: BET_FALSE
    })
}