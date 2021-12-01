import express from 'express';
import * as UploadImageController from '../../controllers/CardLayout/UploadImage.js';
const router=express.Router();

router.route('/uploadImage')
    //.get(CardLayoutController.indexEvent)
    .post(UploadImageController.saveImage);
    
// router.route('/events/:id')// parameter name nodejs is gonna use
//     .get(CardLayoutController.getEvent)
//     .put(CardLayoutController.updateEvent)
//     .delete(CardLayoutController.removeEvent);

export default router;