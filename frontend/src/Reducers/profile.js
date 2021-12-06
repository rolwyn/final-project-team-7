import { ISSIGNIN } from "../Constants/actionTypes"


const profileReducer = (isSignIn = false, action) => {
    switch(action.type){
        case ISSIGNIN:
            return action?.loggedin
        default:
            return isSignIn
    }
}

export default profileReducer