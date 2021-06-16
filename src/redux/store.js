import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/userReducer';
import customer from './reducers/customerReducer';
import custBet from './reducers/custBetReducer';
import raceInfo from './reducers/raceInfoReducer';
import employee from './reducers/employeeReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: user,
    customer: customer,
    custBet: custBet,
    raceInfo: raceInfo,
    employee: employee
})

// added compose to enable Chrome exstension for debugging purpose
const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
