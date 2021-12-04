//map all the named exports to the below object
import { response } from "express";
import Event from "../../models/CardLayout/Event.js";
import mongoose from "mongoose";
import * as CardLayoutService from "../../services/CardLayout.js";


//Method to handle errors
const errorHandler = (message,response, errCode=500)=>{
    response.status(errCode);
    response.json({error:message});
};

//method to execute when exec is successfull
const setSuccessResponse= (data, response)=>{
    response.status(200);
    response.json(data);

};
//for error handling : 8:34pm 10/11/21
export const getAllEvents=async (request,response)=>{
    //response will get all the event deets
    try{
        const events= await CardLayoutService.searchEvent();
        setSuccessResponse(events, response);
    }catch(e){
        errorHandler(e.message,response);
    }
    

}

//Method used to save data when POST is executed
export const saveEvent= async (request,response)=>{
    try{
        //shallow clone = ... = clones
        const event={...request.body, creator: request.userId, creationDate: new Date().toISOString()};
        const newEvent= await CardLayoutService.createEvent(event);
        setSuccessResponse(newEvent,response);
    }
    catch(e)
    {
        console.log(e)
        errorHandler(e.message,response);
    }

};


// //diff things we are reading in all funcs
export const getEvent=async (request,response)=>{
    try{
        //in route called it as id, sets the params.id with whatever the url had as idd
        const id=request.params.id;
        const event= await CardLayoutService.getEvent(id);
        setSuccessResponse(event, response);
    }catch(e){
        errorHandler(e.message,response);
    }
};

export const likeEvent = async (req, resp) => {
    try {

        const { id } = req.params
        
        if(!req.userId) return errorHandler("Unauthenticated", resp)

        const event = await CardLayoutService.getEvent(id)
        const didLike = event.likes.findIndex((id) => id === String(req.userId))

        if(didLike === -1){
            //Liking the post
            event.likes.push(req.userId)
        }else{
            event.likes = event.likes.filter((id) => id !== String(req.userId))
        }

        const newEvent = await CardLayoutService.updateEvent(event)
        setSuccessResponse(newEvent, resp)

    } catch (error) {
       errorHandler(error.message, resp)
    }
}

export const deleteEvent = async (req, resp) => {
    try {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return errorHandler(`No post with id ${id}`, resp, 404) 

        const event = await CardLayoutService.deleteEvent(id)
        setSuccessResponse({message: `Deleted post with id ${id}`}, resp)

    } catch (error) {
       errorHandler(error.message, resp) 
    }
}
// //update the item 
// export const updateEvent=async (request,response)=>{
//     try{
//         //in route called it as id, sets the params.id with whatever the url had as idd
//         const id=request.params.id;
//         const event= {...request.body.id};
//         const updatedEvent= await CardLayoutService.updateEvent(event);
//         setSuccessResponse(updatedEvent, response);
//     }catch(e){
//         errorHandler(e.message,response);
//     }
// }
// // //fix this
// export const removeEvent=async (request,response)=>{
//     try{
//         //in route called it as id, sets the params.id with whatever the url had as idd
//         const id=request.params.id;
//         const event=  await CardLayoutService.removeEvent(id);
//         setSuccessResponse({message: `Item : ${id} remove successfully`}, response);
//     }catch(e){
//         errorHandler(e.message,response);
//     }
// }