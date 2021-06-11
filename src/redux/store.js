import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: user
})

const store = createStore(reducers, initialState, applyMiddleware(...middleware));

export default store;
