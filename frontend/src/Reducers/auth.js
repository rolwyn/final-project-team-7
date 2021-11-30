
const authReducer = (state, action) => {
    switch(action.type){
        case 'AUTH':
            console.log(action?.data)
            break
        default:
            break
    }
}

export default authReducer