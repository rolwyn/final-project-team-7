import authRouter from './authRoutes/authRoute.js'

import CardLayoutRouter from './CardLayout/CardLayout.js'
//import UploadImageRouter from './CardLayout/UploadImage.js'

export default (app) => {
    app.use('/api/users', authRouter)
    app.use('/api/events',CardLayoutRouter)
    //app.use('/api/events/uploadImage', UploadImageRouter)
}
