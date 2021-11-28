import authRouter from './authRoutes/authRoute.js'

export default (app) => {
    app.use('/api/users', authRouter)
}