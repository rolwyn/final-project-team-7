import authRouter from './authRoutes/authRoute.js'
import CardLayoutRouter from './CardLayout/CardLayout.js'

export default (app) => {
    app.use('/api/users', authRouter)
}
// export default (app)=>{
//     app.use('/api/events',CardLayoutRouter);
// }