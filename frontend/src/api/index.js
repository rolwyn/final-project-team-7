import axios from 'axios'

const baseUrl = "http://localhost:4200/"

//this is where you make all your api calls and export them

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
    return axios.post(baseUrl + "api/user/signup", {
        email: email,
        familyName: familyname,
        givenName: givenname,
        userName: username,
        imageUrl: imageurl,
        password: password
    })
}