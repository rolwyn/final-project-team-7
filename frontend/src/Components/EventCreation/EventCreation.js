import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
//import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
import FileBase from 'react-file-base64';
import {createEvent} from '../../Actions/events';
import { useDispatch } from 'react-redux';
import './EventCreation.scss';

const EventCreateUpdate=({event, setShowModal})=>{
    //states describing the event and marking changes in the event.
    const [eventName, setEventName]=useState("");
    const [description, setDescription]= useState("");
    const [img,setImg]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [endTime, setEndTime] = useState("")
    const [location, setLocation] = useState("")
    const isAddModal = useSelector((state) => state.modal)
    const [chips, setChips] = useState("")
    const dispatch = useDispatch()
    //for modal
    const user = JSON.parse(localStorage.getItem('userProfile'))
    
    //in case of edit, event prop exists, set states with events fields
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
    },[event]);
 
     
    //clear all states
    const clearAllFields = async ()=>{
        await setEventName("");
        await setDescription("");
        await setImg("");
        await setDate("");
        await setTime("");
        await setLocation("")
        await setEndTime("")
        await setChips("")
    }

   
    //whenever form is submitted
    const submitForm= async (e)=>{
        e.preventDefault();
        // checkIfNull;
        if(!user?.profileObj?.name){
            clearAllFields();
            return alert("You have to sign in to make a event")
            
        }
        let chipsArr = chips.split(" ")
        console.log(chipsArr) 
         //dispatch call for create event
        dispatch(createEvent(eventName, location, description, img, date, time, endTime, user?.profileObj?.name, chipsArr))   

        clearAllFields();
        setShowModal((previousState=>!previousState));
        
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
            case 'setEndTime':
                setEndTime(oneElement.target.value)
                break
            case 'setChips':
                setChips(oneElement.target.value)
                break
            default : break;
        }
        
        
    }
    //on fileUpload
    const onFileUpload = (base64) =>{
        if(base64)
        {
            setImg(base64.base64);
        }
             
    }
    // const addChips = (val) => {
    //     setChips([...chips, val])
    // }

    // const removeChips = (idx) => {
    //     setChips(chips => {
    //         chips.splice(idx, 1)
    //     })
    // }
    // const customStyles = {
    //     content: {
    //       top: '50%',
    //       left: '50%',
    //       right: 'auto',
    //       bottom: 'auto',
    //       marginRight: '-50%',
    //       transform: 'translate(-50%, -50%)',
    //     },
    //   };
        return (<div> 
            <Form onSubmit={(event)=>submitForm(event)} className="form">
                    {/* depending on which button is clicked(add/edit) change heading */}
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
                    <div className="formElement">
                        <label>End Time</label>
                        <input type="time" value={endTime} name="endTime" id="endTime" onChange={(e)=>change(e,"setEndTime")} required/>
                    </div>
                    <div className="formElement">
                        <label>Tags (Space separated)</label>
                        <input type="text" name="chips" value={chips} id="eventName" onChange={(event)=>change(event, "setChips")} required/>
                    </div>       
                    <div className="formElement right">
                        <label> Image </label>
                        <FileBase type="file" multiple={false} onDone={(base64)=>onFileUpload(base64)}/>
                   </div>    
                    <button className="save" type="submit">{isAddModal?"Create":"Update"}</button>
       
                
            </Form>
            
        </div>
    )
}

 
export default EventCreateUpdate;

