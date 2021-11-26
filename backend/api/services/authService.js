import User from '../models/user/user.js'

/**
 * save function returns a promise when data is saved
 * create a user and insert it in db
 * 
 * @param {user} the user 
 * @returns the save promise 
 */
 export const signup = (user) => {
    const newUser = new User(user)
    return newUser.save()

    // (error, user) => {
    //     if (error) {
    //         res.status(500).send
    //     }

    //     res.send({ message: "User was registered successfully!" });
    // }
}