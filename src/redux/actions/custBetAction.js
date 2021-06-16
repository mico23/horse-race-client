import {
    CUSTOMER_BET_INFO,
    CUSTOMER_BET_INFO_FAIL
} from '../types';
import axios from 'axios';

export const fetchBetInfo = (accountid) => (dispatch) => {
    const id = parseInt(accountid);
    
    axios
        .get(`/transaction/customerBetInfo.php?accountid=${id}`)
        .then((res) => {
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

export const makeBet = (betData) => (dispatch) => {
    axios
        .post(`transaction/makeBet.php`, betData)
        .then((res) => {
            dispatch(fetchBetInfo(betData.accountID));
        })
        .catch((err) => {
            console.log(err);
        })
}