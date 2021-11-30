import Event from "../models/CardLayout/Event.js";
/**
 * 
 * @param {*} params 
 * @returns {}
 */
export const searchEvent =(params={})=>{
    //const id=params.id || 1
    const promise=Event.find(params).exec();
    return promise;
};

//takes contact, and saves it
export const createEvent=(event)=>{
    const newContact=new Event(event);
    return newContact.save();//should return a promise, this is of mongoose
}

export const getEvent=(id)=>{
    const promise=Event.findById(id).exec();
    return promise;
}
// export const update=(contact)=>{
//     contact._id=contact.id;
//     const promise=Event.findByIdAndUpdate(contact.id,contact,{new:true}).exec();
//     return promise;
// }
// export const remove=(id)=>{
//     const promise=Event.findByIdAndDelete(id).exec();
//     return promise;
// }