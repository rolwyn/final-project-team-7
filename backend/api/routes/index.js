import authRouter from './authRoutes/authRoute.js'
import userRouter from './authRoutes/userRoute.js'

import CardLayoutRouter from './CardLayout/CardLayout.js'
//import UploadImageRouter from './CardLayout/UploadImage.js'

export default (app) => {
    app.use('/api/users', authRouter)
    app.use('/api/events',CardLayoutRouter),
    app.use("api/auth", userRouter);
    //app.use('/api/events/uploadImage', UploadImageRouter)
}
