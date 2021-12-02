import jwt from "jsonwebtoken";
import config from "../../config/auth.config.js";
import User from "../models/user/user.js";

const setErrorResponse = (message, res) => {
  res.status(500);
  res.json({error: message});
}

const setAuthErrorResponse = (message, res) => {
  res.status(401);
  res.json({message: message});
}
const setForbiddenErrorResponse = (message, res) => {
  res.status(403);
  res.json({message: message});
}


verifyJwtToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
if(!token) {
  return setForbiddenErrorResponse( "No token provided", res);
}

jwt.verify(token.config.secret, (e, decoded)=> {
  if(e) {
    return setAuthErrorResponse("Unauthorised", res);
  }

  req.userId = decoded.id;
  next();
});



}


const authJwt = {
  verifyJwtToken
};

export default { authJwt };