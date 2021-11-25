import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from '../config/config.js'

const host = config.DB_HOST

const app = express();

mongoose.connect(host, {useNewUrlParser: true});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

routes(app)

export default app;