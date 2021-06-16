import {
    CUSTOMER_BET_INFO,
    CUSTOMER_BET_INFO_FAIL
} from '../types';
import axios from 'axios';

export const fetchBetInfo = (accountid) => (dispatch) => {
    console.log('fetching betInfo');
    const id = parseInt(accountid);
    
    axios
        .get(`/transaction/customerBetInfo.php?accountid=${id}`)
        .then((res) => {
            // console.log(res.data.records);
            dispatch({
                type: CUSTOMER_BET_INFO,
                payload: res.data.records
            });
        })
        .catch((err) => {
            dispatch({
                type: CUSTOMER_BET_INFO_FAIL
            })
        })
}