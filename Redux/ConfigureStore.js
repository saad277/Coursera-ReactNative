

import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'


import comments from "./reducers/comments";
import dishes from './reducers/dishes'
import promotions from './reducers/promotions'
import leaders from './reducers/leaders'
import favorites from './reducers/favorites'

const rootReducer = combineReducers({


    dishes,
    comments,
    promotions,
    leaders,
    favorites

})


export const ConfigureStore = createStore(rootReducer, applyMiddleware(thunk, logger))


