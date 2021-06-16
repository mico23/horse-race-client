import {
    ADD_JOCKEY
} from '../types';
import axios from 'axios';

// add jockey
export const addJockey = (jdata) => (dispatch) => {
    console.log('adding');
    console.log(jdata);
    axios
      .post(`/jockey/addjockey.php`, jdata)
      .then((res)=>{
          console.log("printing out response")
          console.log(res.data);
          dispatch({
              type: ADD_JOCKEY,
              payload: jdata
          })
      })
  }