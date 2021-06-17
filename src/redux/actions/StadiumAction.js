import {
    ALL_STADIUM_INFO,
    ALL_STADIUM_INFO_FAIL,
    STADIUM_INFO,
    STADIUM_INFO_FAIL
} from '../types';
import axios from 'axios';

// fetch all stadium info
export const fetchAllStadiums = () => (dispatch) => {
    // console.log('fetching all stadiums info');
    axios
        .get(`/stadium/allStadiumInfo.php`)
        .then((res) => {
            console.log(res.data.records);
            dispatch({
                type: ALL_STADIUM_INFO,
                payload: res.data.records
            });
        })
        .catch((err) => {
            dispatch({
                type: ALL_STADIUM_INFO_FAIL
            })
        })
}

// fetch single stadium info
export const fetchSingleStadium = (address) => (dispatch) => {
    
    axios
        .get(`/stadium/stadiumInfo.php?address=${address}`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: STADIUM_INFO,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: STADIUM_INFO_FAIL
            })
        })
}