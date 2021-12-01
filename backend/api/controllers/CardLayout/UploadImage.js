import { response } from "express";
import Event from "../../models/CardLayout/Event.js";
//import * as CardLayoutService from "../../services/CardLayout.js";


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


//Method used to save data when POST is executed
export const saveImage= async (request,response)=>{
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
