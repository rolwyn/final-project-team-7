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

export default app;