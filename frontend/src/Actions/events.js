import * as api from '../Api/index'

export const getEvents = () => async (dispatch) => {
    try {
       const {data} = await api.getEvents()
       dispatch({ type: 'FETCH_ALL', payload: data })
       
    } catch (error) {
       console.log(error.message) 
    }
}

export const createEvent = (eventName, description, img, date, time, name) => async (dispatch) => {
    try {
        const {data} = await api.createEvent(eventName, description, img, date, time, name)
        dispatch({ type: 'CREATE', payload: data })

    } catch (error) {
       console.log(error.message) 
    }
}

export const likeEvent = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeEvent(id)
        dispatch({ type: 'LIKE', payload: data })
    } catch (error) {
       console.log(error.message) 
    }
}