import {
    ALL_SUPPLIER_INFO,
    ALL_SUPPLIER_INFO_FAIL,
    SUPPLIER_INFO,
    SUPPLIER_INFO_FAIL
} from '../types';

const initialState = {
    suppliers: [],
    name:"",
    id:0,
    phone:"",
    type:""
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ALL_SUPPLIER_INFO:
            return {
                ...state,
                jockyes: action.payload
            }
        case ALL_SUPPLIER_INFO_FAIL:
            return state;
        case SUPPLIER_INFO:
            return {
                ...state,
                name:"",
                id:0,
                phone:"",
                type:""
            }
        case SUPPLIER_INFO_FAIL:
            return state;
        default:
            return state;
    }
}