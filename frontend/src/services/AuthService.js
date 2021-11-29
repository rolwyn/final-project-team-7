import axios from "axios"
import config from "../../public/config/config.js"

/**
 * Service call for storing new user information in database
 * @param {*} email 
 * @param {*} familyname 
 * @param {*} givenname 
 * @param {*} username 
 * @param {*} imageurl 
 * @param {*} password 
 * @returns a promise which resolves to a response object or error
 */
export const signup = (email, familyname, givenname, username, imageurl, password) => {
    return axios.post(config.API_BASE_URL + "signup", {
        email: email,
        familyName: familyname,
        givenName: givenname,
        userName: username,
        imageUrl: imageurl,
        password: password
    })
}