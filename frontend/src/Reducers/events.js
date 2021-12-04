import { FETCH_ALL, CREATE, LIKE } from "../Constants/actionTypes"

const eventsReducer = (events = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [ ...events, action.payload ]
        case LIKE:
            return events.map((event) => (event._id === action.payload._id ? action.payload : event))
        default:
            return events
    }
}

export default eventsReducer