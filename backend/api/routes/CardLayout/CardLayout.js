import express from 'express';
import * as CardLayoutController from '../controllers/CardLayout/CardLayout.js'
const router=express.Router();

router.route('/events')
    .get(CardLayoutController.indexEvent)
//     .post(CardLayoutController.saveEvent);
    
// router.route('/events/:id')// parameter name nodejs is gonna use
//     .get(CardLayoutController.getEvent)
//     .put(CardLayoutController.updateEvent)
//     .delete(CardLayoutController.removeEvent);

export default router;