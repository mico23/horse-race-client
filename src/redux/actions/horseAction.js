import {
    ALL_HORSE_INFO,
    ALL_HORSE_INFO_FAIL,
    HORSE_INFO,
    HORSE_INFO_FAIL,
} from '../types';
import axios from 'axios';


// fetch all horses info
export const fetchAllHorses = () => (dispatch) => {
    // console.log('fetching all horses info');
    axios
        .get(`/horse/allHorseInfo.php`)
        .then((res) => {
            console.log(res.data.records);
            dispatch({
                type: ALL_HORSE_INFO,
                payload: res.data.records
            });
        })
        .catch((err) => {
            dispatch({
                type: ALL_HORSE_INFO_FAIL
            })
        })
}

// fecth horse information
export const fetchSingleHorse = (horseID) => (dispatch) => {
    
    axios
        .get(`/horse/horseInfo.php?horseid=${horseID}`)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: HORSE_INFO,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: HORSE_INFO_FAIL
            })
        })
}