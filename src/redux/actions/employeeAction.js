import {
    ALL_EMPLOYEE,
    ALL_EMPLOYEE_FAIL,
    SET_CUR_EMP_ACC_ID,
    EMPLOYEE_INFO,
    EMPLOYEE_INFO_FAIL,
    // below not used
    OPEN_ADD_E,
    CLOSE_ADD_E,
    ADD_EMPLOYEE,
    DISPLAY_PROFILE,
    EDIT_EMPLOYEE
} from '../types';
import axios from 'axios';

// fecth employee information
export const fetchSingleEmployeeInfo = (accountID) => (dispatch) => {
    console.log('fetching employeeInfo');
    
    axios
        .get(`/employee/employeeInfo.php?accountid=${accountID}`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: EMPLOYEE_INFO,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: EMPLOYEE_INFO_FAIL
            })
        })
}

export const fetchAllEmployeesInfo = () => (dispatch) => {
    console.log('fetching all employees');

    axios
        .get(`/employee/allEmployeeInfo.php`)
        .then((res) => {
            //console.log(res.data);
            dispatch({
                type: ALL_EMPLOYEE,
                payload: res.data.records
            })
        })
        .catch((err)=> {
            dispatch({
                type: ALL_EMPLOYEE_FAIL
            })
        })
}

export const setCurEmpAccountID = (accountID) => (dispatch) => {
    dispatch({
        type: SET_CUR_EMP_ACC_ID,
        payload: accountID
    })
}

// add employee
export const addEmployee = (edata) => (dispatch) => {
  console.log('adding');
  console.log(edata);
  axios
    .post(`/employee/addemployee.php`, edata)
    .then((res)=>{
        console.log("printing out response")
        console.log(res.data);
        dispatch({
            type: ADD_EMPLOYEE,
            payload: edata
        })
    })
}

// edit employee 
export const editEmployee = (edata) => (dispatch) => {
  console.log('proccessing');
  console.log(edata);
  axios
    .post(`/employee/editemployee.php`, edata)
    .then((res)=>{
        console.log("printing out response")
        console.log(res.data);
        dispatch({
            type: EDIT_EMPLOYEE,
            payload: edata
        })
    })
}

// to display Profile Summary
export const displayProfile = () => (dispatch) => {
    dispatch({ type: DISPLAY_PROFILE });
}

// to open the add employee dialog
export const openAddE = () => (dispatch) => {
    dispatch({ type: OPEN_ADD_E });
}

// to close the add employee dialog
export const closeAddE = () => (dispatch) => {
    dispatch({ type: CLOSE_ADD_E });
}