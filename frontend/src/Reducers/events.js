import { FETCH_ALL, CREATE, LIKE, DELETE } from "../Constants/actionTypes"

const eventsReducer = (events = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [ ...events, action.payload ]
        case LIKE:
            return events.map((event) => (event._id === action.payload._id ? action.payload : event))
        case DELETE:
            return events.filter((event) => event.id !== action.payload)
        //case UPDATE :
            //return events.filter((event))
        default:
            return events
    }
}
// const singleEventReducer=(singleEvent, action) =>{
    
// }


export default eventsReducer