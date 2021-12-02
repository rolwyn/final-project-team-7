import { FETCH_ALL, CREATE } from "../Constants/actionTypes"

const eventsReducer = (events = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return events
        
        default:
            return events
    }
}

export default eventsReducer