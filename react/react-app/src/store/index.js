import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as sidebar from './sidebar/reducer'

let store = createStore(
    combineReducers({...sidebar}),
    applyMiddleware(thunk)
)

export default store