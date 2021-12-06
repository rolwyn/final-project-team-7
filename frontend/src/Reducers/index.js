import { combineReducers } from "redux"

import auth from './auth'
import events from './events'
import profile from './profile'


export default combineReducers({
    auth, events, profile
})