import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Form from "react-validation/build/form";
import FileBase from 'react-file-base64';
import {createEvent} from '../../Actions/events';
import { useDispatch } from 'react-redux';
import './EventCreation.scss';

const EventCreation=({event})=>{
    
    const [eventName, setEventName]=useState("");
    const [description, setDescription]= useState("");
    const [img,setImg]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [location, setLocation] = useState("")
    const isAddModal = useSelector((state) => state.modal)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userProfile'))
    
    useEffect(() => {
        if(event)
    {
        
        setEventName(event.eventName);
        setDescription(event.description);
        setImg(event.img);
        setDate(event.date);
        setTime(event.time);
        setLocation(event.location);
    }
    },[]);
    
    
        
    //clear all states
    const clearAllFields = async ()=>{
        await setEventName("");
        await setDescription("");
        await setImg("");
        await setDate("");
        await setTime("");
        await setLocation("")
    }

   
    //whenever form is submitted
    const submitForm= async (e)=>{
        e.preventDefault();
        console.log(eventName, location, description, img, date, time, user?.profileObj?.name)
        // checkIfNull;
        if(!user?.profileObj?.name){
            clearAllFields();
            return alert("You have to sign in to make a event")
            
        }
        
        dispatch(createEvent(eventName, location, description, img, date, time, user?.profileObj?.name))   

        clearAllFields();
        
    }
    //whenever fields are updated
    const change=(oneElement,property)=>{
        
        switch(property){
            case 'setEventName' :
                setEventName(oneElement.target.value);
                break;
            case 'setLocation':
                setLocation(oneElement.target.value);
                break;
            case 'setDescription' :
                setDescription(oneElement.target.value);
                break;
            case 'setDate' :
                setDate(oneElement.target.value);
                break;
            case 'setTime' :
                setTime(oneElement.target.value);
                break;
            default : break;
        }
        
        
    }
    const onFileUpload = (base64) =>{
        if(base64)
        {
            setImg(base64.base64);
        }
             
    }
    // const closeAdd={

    // }
    //render() { 
        // const close = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        return (<div> 
            <Form onSubmit={(event)=>submitForm(event)} className="form">
            {/* <button className="closeAdd" onClick={()=>closeAdd}>{close}</button> */}
                    {isAddModal?<h1 className="star"> Create an Event</h1> : <h1 className="star"> Edit {eventName}</h1>}
                    <div className="formElement">
                        <label> Event Name</label>
                        <input type="text" name="eventName" value={eventName} id="eventName" onChange={(event)=>change(event, "setEventName")} required/>
                    </div>
                    <div className="formElement">
                        <label> Description</label>
                        <textarea type="text" value={description} name="desc" id="desc" onChange={(e)=>change(e,"setDescription")} placeholder="Tell Everyone what your event is about" required/>
                    </div>
                    <div className="formElement">
                        <label> Location</label>
                        <input type="text" value={location} name="location" id="location" onChange={(e)=>change(e,"setLocation")} required/>
                    </div> 
                    <div className="formElement">
                        <label> Date </label>
                        <input type="date" value={date} name="date" id="date" onChange={(e)=>change(e,"setDate")} required/>
                    </div>
                    <div className="formElement">
                        <label> Time</label>
                        <input type="time" value={time} name="time" id="time" onChange={(e)=>change(e,"setTime")} required/>
                    </div>                 
                    <div className="formElement right">
                        <label> Image </label>
                        {/* <Input type="file"  accept="image/*" name="image" id="file" /> */}
                        
                        <FileBase type="file" multiple={false} onDone={(base64)=>onFileUpload(base64)}/>
                    </div>    
                    <button id="save" type="submit">Add</button>
       
                
            </Form>
            
        </div>
    )
}
 
export default EventCreation;

