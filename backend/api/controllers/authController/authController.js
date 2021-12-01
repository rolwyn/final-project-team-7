import { response } from 'express'
import * as authService from '../../services/authService.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/user/user.js'

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
    res.status(500);
    res.json({ error: message });
}

export const signup = async (req, res) => {
    try {
        const user = {
            ...req.body, name: req.body.givenName + ' ' + req.body.familyName,
            password: bcryptjs.hashSync(req.body.password, 8),
        }
        const newUser = await authService.signup(user)

        let token = jwt.sign({ id: newUser?._id }, "avc", {
            // 24 hours
            expiresIn: 86400
        });
        setSuccessResponse({newUser: newUser, tokenId: token}, res)
    } catch (e) {
        setErrorResponse(e.message, res)
    }
};


export const login = async (req, res) => {
    try {
        User.findOne({
            username: req.body.username
        })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (!user) {
                return setErrorResponse("User doesn't exist! Please sign-up!", res)
            }

            let passwordIsValid = bcryptjs.compareSync(
                req.body.password,
                User.password
            );
            if (!passwordIsValid) {
                return setErrorResponse("Invalid Password!", res)
            };

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            let authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user._id,
                username: user.username,
                roles: authorities,
                accessToken: token
            });
        });
    }

    catch (e) {
        setErrorResponse(e.message, res)
    }

};