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
    return axios.post(baseUrl + "api/users/signup", {
        email: email,
        familyName: familyname,
        givenName: givenname,
        userName: username,
        imageUrl: imageurl,
        password: password
    })
};

/**
 * Service call to login existing user
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */

export const login = (username, password) => {
    return axios.post(baseUrl + "api/users/login", {
        userName: username,
        password: password
    })
};


/**
 * Service call for creating new event in the database
 * @param {*} eventName 
 * @param {*} description 
 * @param {*} img 
 * @param {*} date 
 * @param {*} time 
 * @returns a promise which resolves to a response object or error
 */
export const createEvent = (eventName, description, img, date, time) => {
    return axios.post(baseUrl + "api/events/createEvent", {
        eventName: eventName,
        description: description,
        img: img,
        date: date,
        time: time
    });

}
//service call for getting all the events in the database
export const getEvents = () => {
    return axios.get(baseUrl + "api/events/getEvents")

}
