import { response } from 'express'
import * as authService from '../../services/authService.js'
import bcryptjs from 'bcryptjs'

/**
 * Set a success response
 * 
 * @param {*} data take the response of the query and returns as JSON
 * @param {*} res server response if call is successful
 */
 const setSuccessResponse = (data, res) => {
    res.status(200);
    res.json(data);
}

/**
 * Set a error response
 * 
 * @param {*} message the message if there is an error (returned from catch block)
 * @param {*} res will return 500 response status code if there is an error
 */
const setErrorResponse = (message, res) => {
    res.status(599);
    res.json({error: message});
}

export const signup = async (req, res) => {
    try {
        const user = {...req.body, password: bcryptjs.hashSync(req.body.password, 8) }
        const newUser = await authService.signup(user)
        setSuccessResponse(newUser, res)
    } catch (e) {
        setErrorResponse(e.message, res) 
    }
}
