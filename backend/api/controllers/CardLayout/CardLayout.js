//map all the named exports to the below object
import { response } from "express";
import Event from "../models/CardLayout/Event.js";
import * as CardLayoutService from "../services/CardLayout/CardLayout.js";


//Method to handle errors
const errorHandler = (message,response)=>{
    response.status(500);
    response.json({error:message});
};

//method to execute when exec is successfull
const setSuccessResponse= (data, response)=>{
    response.status(200);
    response.json(data);

};
//for error handling : 8:34pm 10/11/21
export const indexEvent=async (request,response)=>{
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
        const event={...request.body};
        const newEvent= await CardLayoutService.createEvent(event);
        setSuccessResponse(newEvent,response);
    }
    catch(e)
    {
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
// //update the item 
// export const updateEvent=async (request,response)=>{
//     try{
//         //in route called it as id, sets the params.id with whatever the url had as idd
//         const id=request.params.id;
//         const event= {...request.body,id};
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