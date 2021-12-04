import { FETCH_ALL, CREATE } from "../Constants/actionTypes"

const eventsReducer = (events = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            console.log(action)
            return action.payload
        case CREATE:
            return [ ...events, action.payload ]
        
        default:
            return events
    }
}

export default eventsReducer