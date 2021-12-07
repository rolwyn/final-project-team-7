import { ISADD, ISEDIT } from "../Constants/actionTypes"


const modalReducer = (isAddModal = false, action) => {
    switch(action.type){
        case ISADD:
            return isAddModal = true
        case ISEDIT:
            return isAddModal = false    
        default:
            return isAddModal
    }
}

export default modalReducer