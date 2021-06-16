import {
    ALL_HORSE_INFO,
    ALL_HORSE_INFO_FAIL,
    HORSE_INFO,
    HORSE_INFO_FAIL,
    SET_CUR_HORSE_ID
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
            console.log(res.data);
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

export const setCurHorseID = (horseID) => (dispatch) => {
    dispatch({
        type: SET_CUR_HORSE_ID,
        payload: horseID
    })
}

// // add horse
// export const addHorse = (hdata) => (dispatch) => {
//     // console.log('adding');
//     // console.log(hdata);
//     axios
//       .post(`/horse/addhorse.php`, hdata)
//       .then((res)=>{
//           console.log("printing out response")
//           console.log(res.data);
//           dispatch({
//               type: ADD_HORSE,
//               payload: hdata
//           })
//       })
//   }