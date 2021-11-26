import express from 'express'
// import * as authController from ''

const router = express.Router();

/**
 * all auth urls will here here
 * get      - get all data
 * post     - add new data
 * put      - update on existing data
 * delete   - delete the data from db
 */

router.route('/signup')
   .post(authController.signup)

// router.route('/login')
//     .post(authController.login)

export default router