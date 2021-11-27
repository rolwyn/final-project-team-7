import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from '../config/config.js'
import routes from './routes/index.js';
import models from './models/index.js';
// import * as authService from './services/authService.js'

const host = config.DB_HOST

const app = express();

// use new parser else set it to false to use old url parser
mongoose.connect(host, {useNewUrlParser: true})
.then(() => {
    console.log("Database connection is successful")
    // saveRolesToDb()
})
.catch(error => {
    console.log("Database connection error:", error)
    process.exit()
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

routes(app)

// const saveRolesToDb = () => {
//     console.log("Reached to Roles")
//     models.Role.estimatedDocumentCount(async (error, count) => {
//         if (!error && count === 0) {
//             try {
//                 const userRole = {name: "user"}
//                 const adminRole = {name: "admin"}
//                 const moderatorRole = {name: "moderator"}

//                 await authService.createRole(userRole)
//                 await authService.createRole(adminRole)
//                 await authService.createRole(moderatorRole)

//                 console.log("Added Roles to Collection")

//             } catch (e) {
//                 console.log("Error while creating a role:", e)
//             }
//         }
//     })
// }


export default app;