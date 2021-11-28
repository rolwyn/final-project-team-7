import express from 'express';
import * as CardLayoutController from '../controllers/CardLayout/CardLayout.js'
const router=express.Router();

router.route('/events')
    .get(CardLayoutController.index)
//     .post(CardLayoutController.save);
    
// router.route('/events/:id')// parameter name nodejs is gonna use
//     .get(CardLayoutController.get)
//     .put(CardLayoutController.update)
//     .delete(CardLayoutController.remove);

export default router;