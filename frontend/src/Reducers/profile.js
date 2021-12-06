import { ISSIGNIN, ISNOTSIGNIN } from "../Constants/actionTypes"


const profileReducer = (isSignIn = false, action) => {
    switch(action.type){
        case ISSIGNIN:
            return isSignIn = true
        case ISNOTSIGNIN:
            return isSignIn = false    
        default:
            return isSignIn
    }
}

export default profileReducer