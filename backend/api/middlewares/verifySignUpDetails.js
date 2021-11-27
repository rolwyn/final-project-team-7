import models from '../models/index.js';

const Roles = models.Roles
const User = models.User

/**
 * Set a 500 error response
 * 
 * @param {*} message the message if there is an error (returned from catch block)
 * @param {*} res will return 500 response status code if there is an error
 */
const setErrorResponse = (message, res) => {
    res.status(500);
    res.json({error: message});
}

/**
 * Set a 400 authentication error response
 * 
 * @param {*} message the message if there is an error (returned from catch block)
 * @param {*} res will return 500 response status code if there is an error
 */
 const setAuthErrorResponse = (message, res) => {
    res.status(400);
    res.json({message: "User already exists!"});
}


const checkForDuplicateUnameEmail = (req, res, next) => {
    // check if username is already present in db
    User.findOne({
        userName: req.body.userName
    }).exec((error, user) => {
        if (error) {
            setErrorResponse(error.message, res)
            return
        }
        if (user) {
            setAuthErrorResponse(error.message, res)
            return
        }
    })
}