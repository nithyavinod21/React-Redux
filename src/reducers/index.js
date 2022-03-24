// Root Reducer which will combine all the reducers

import {combineReducers} from 'redux';

import food from './food_item';

const rootReducer=combineReducers(
    {
    food
    }
)
export default rootReducer;
