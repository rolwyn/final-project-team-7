import express from 'express';
import * as CardLayoutController from '../../controllers/CardLayout/CardLayout.js';
import {verifyJwtToken} from '../../middlewares/jwtAuth.js'

const router=express.Router();

router.route('/createEvent')
    .post(verifyJwtToken, CardLayoutController.saveEvent);
router.route('/getEvents')
    .get(CardLayoutController.getAllEvents);
router.route('/searchEvents')
    .get(CardLayoutController.getEventsBySearch)
router.route('/:id/like')
    .patch(verifyJwtToken, CardLayoutController.likeEvent)
router.route('/:id/schedule')
    .patch(verifyJwtToken, CardLayoutController.scheduleEvent)
router.route('/:id')
    .delete(verifyJwtToken, CardLayoutController.deleteEvent)
    .put(CardLayoutController.updateEvent)
// router.route('/events/:id')// parameter name nodejs is gonna use
//     .get(CardLayoutController.getEvent)
//     .put(CardLayoutController.updateEvent)
//     .delete(CardLayoutController.removeEvent);

export default router;