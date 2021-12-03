import express from 'express'
import { jwtAuth } from "../middlewares";
import controller from "../controllers/userContoller.js";


const router = express.Router();

app.get("/test/all", controller.allAccess);

app.get("/test/user", [jwtAuth.verifyToken], controller.userBoard);


export default router