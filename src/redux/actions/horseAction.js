import {
    HORSE_INFO,
    HORSE_INFO_FAIL,
    ADD_HORSE
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
                type: HORSE_INFO,
                payload: res.data.records
            });
        })
        .catch((err) => {
            dispatch({
                type: HORSE_INFO_FAIL
            })
        })
}

// add horse
export const addHorse = (hdata) => (dispatch) => {
    // console.log('adding');
    // console.log(hdata);
    axios
      .post(`/horse/addhorse.php`, hdata)
      .then((res)=>{
          console.log("printing out response")
          console.log(res.data);
          dispatch({
              type: ADD_HORSE,
              payload: hdata
          })
      })
  }