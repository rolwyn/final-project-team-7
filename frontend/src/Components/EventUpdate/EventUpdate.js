import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import FileBase from 'react-file-base64';
//import {updateEvent} from '../../Actions/events';
import { useDispatch } from 'react-redux';
import './EventUpdate.scss';

const EventUpdate=({event})=>{
    console.log(event.eventName);
    const [eventName, setEventName]=useState(event.eventName);
    const [description, setDescription]= useState(event.description);
    const [img,setImg]=useState(event.img);
    const [date,setDate]=useState(event.date);
    const [time,setTime]=useState(event.time);
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userProfile'))

    //clear all states
    const clearAllFields = async ()=>{
        await setDate("");
        await setDescription("");
        await setImg("");
        await setEventName("");
        await setTime("");
    }

   
    //whenever form is submitted
    const submitForm= async (e)=>{
        e.preventDefault();
        console.log(eventName, description, img, date, time, user?.profileObj?.name)
        // checkIfNull;
        if(!user?.profileObj?.name){
            clearAllFields();
            return alert("You have to sign in to make a event")
            
        }
        
        //dispatch(updateEvent(eventName, description, img, date, time, user?.profileObj?.name))   

        clearAllFields();
        
    }
    //whenever fields are updated
    const change=(oneElement,property)=>{
        
        switch(property){
            case 'setEventName' :
                setEventName(oneElement.target.value);
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
                    <h1 className="star"> Create an Event</h1>
                    <div className="formElement">
                        <label> Event Name</label>
                        <input type="text" name="eventName" value={eventName} id="eventName" onChange={(event)=>change(event, "setEventName")} required/>
                    </div>
                    <div className="formElement">
                        <label> Description</label>
                        <textarea type="text" value={description} name="desc" id="desc" onChange={(e)=>change(e,"setDescription")} placeholder="Tell Everyone what your event is about" required/>
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
 
export default EventUpdate;

