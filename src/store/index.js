import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(reducers);