import {
    ALL_SUPPLIER_INFO,
    ALL_SUPPLIER_INFO_FAIL,
    SUPPLIER_INFO,
    SUPPLIER_INFO_FAIL
} from '../types';
import axios from 'axios';

// fetch all stadium info
export const fetchAllSuppliers = () => (dispatch) => {
    // console.log('fetching all supliers info');
    axios
        .get(`/supplier/allSupplierInfo.php`)
        .then((res) => {
            console.log(res.data.records);
            dispatch({
                type: ALL_SUPPLIER_INFO,
                payload: res.data.records
            });
        })
        .catch((err) => {
            dispatch({
                type: ALL_SUPPLIER_INFO_FAIL
            })
        })
}

// fetch single stadium info
export const fetchSingleSupplier = (supplierID) => (dispatch) => {
    
    axios
        .get(`/supplier/supplierInfo.php?supplierid=${supplierID}`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SUPPLIER_INFO,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SUPPLIER_INFO_FAIL
            })
        })
}