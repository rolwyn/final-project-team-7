import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import FileBase from 'react-file-base64';
import {createEvent} from '../../Api/createEvent.js';
import './EventCreation.scss';

function EventCreation(){
    const [eventName, setEventName]=useState("");
    const [description, setDescription]= useState("");
    const [img,setImg]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");

//class EventCreation extends React.Component {
    
    //whenever form is submitted
    const submitForm= async (e)=>{
        e.preventDefault();
        console.log(" Submitting");
        //axios call
        const response = await createEvent(eventName,description,img,date,time);
        console.log(response);
    }
    //whenever fields are updated
    const change=(oneElement,property)=>{
        console.log("In update ="+oneElement.target.value + "Property="+property);
        //const property=oneElement.target.name;
        switch(property){
            case 'setEventName' :
                setEventName(oneElement.target.value);
                break;
            case 'setDescription' :
                setDescription(oneElement.target.value);
                break;
            case 'setImg' :
                setImg(oneElement.target.value);
                break;
            case 'setDate' :
                setDate(oneElement.target.value);
                break;
            case 'setTime' :
                setTime(oneElement.target.value);
                break;

        }
        
        
    }
    const closeAdd={

    }
    //render() { 
        const close = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        return (<div>
            <Form id="form">
            <button className="closeAdd" onClick={closeAdd}>{close}</button>
                    <h1 className="star"> Create an Event</h1>
                    <div className="formElement">
                        <label> Event Name</label>
                        <Input type="text" name="eventName" id="eventName" onChange={(event)=>change(event, "setEventName")} required/>
                    </div>
                    <div className="formElement">
                        <label> Description</label>
                        <Input type="text" name="desc" id="desc" onChange={(e)=>change(e,"setDescription")} required/>
                    </div>
                    <div className="formElement">
                        <label> Date </label>
                        <Input type="date" name="date" id="date" onChange={(e)=>change(e,"setDate")} required/>
                    </div>
                    <div className="formElement">
                        <label> Time</label>
                        <Input type="time" name="time" id="time" onChange={(e)=>change(e,"setTime")} required/>
                    </div>                 
                    <div className="formElement right">
                        <label> Image</label>
                        {/* <Input type="file"  accept="image/*" name="image" id="file" /> */}
                        <Input className="file" type="file" name="img" id="img" onChange={(e)=>change(e,"setImg")}  required/>
                        {/* <FileBase type="file" multiple="false" onChange={(e)=>change(e,"setImg")}/> */}
                    </div>    
                      
                    {/* <label> Time</label>
                    <Input type="time" name="time" id="time" onChange={(e)=>this.change(e,"time")} required/> */}

                    <button id="save" onClick={submitForm}>Add</button>
       
                
            </Form>
        </div>
    )
}
 
export default EventCreation;

