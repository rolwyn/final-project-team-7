import { combineReducers } from "redux"

import auth from './auth'
import events from './events'
import profile from './profile'
import modal from './modal'


export default combineReducers({
    auth, events, profile, modal
})