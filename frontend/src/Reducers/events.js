import { FETCH_ALL, CREATE } from "../Constants/actionTypes"

const eventsReducer = (events = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            console.log(action.payload)
            return [ ...events, action.payload ]
        
        default:
            return events
    }
}

export default eventsReducer