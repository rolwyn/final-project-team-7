
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
//import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
import FileBase from 'react-file-base64';
import { createEvent } from '../../Actions/events';
import { useDispatch } from 'react-redux';
import './EventCreation.scss';
import Input from "react-validation/build/input"
import CheckFieldsButton from "react-validation/build/button"

const EventCreateUpdate = ({ event, setShowModal }) => {
    //states describing the event and marking changes in the event.
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [showImg, setShowImg] = useState(false)
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [endTime, setEndTime] = useState("")
    const [location, setLocation] = useState("")
    const isAddModal = useSelector((state) => state.modal)
    const [chips, setChips] = useState("")
    const dispatch = useDispatch()
    //for modal
    const user = JSON.parse(localStorage.getItem('userProfile'))
    /**
     * Variables for validation on form
     */
    const [errorMsg, setErrorMsg] = useState("")
    const formElement = React.useRef()
    const chkbuttonElement = React.useRef();
    const uploadBtnElement = React.useRef(null);

    /**
       * Validation for creation of event form
       * @param {*} value value to check if empty
       * @returns error message if feild is empty
       */
    const required = (value) => {
        if (!value) {
            return (
                <div className='text-red-500 text-sm italic mt-2'> This field is required!<sup>*</sup>
                </div>
            )
        }
    }
    /**
     * Handle logic to throw error on image upload
     */
    const handleImageContent = (e) => {
        setErrorMsg("")
        console.log(e)
        let file = e.target.files[0]
        let files = []
        // console.log(file)
        let reader = new FileReader()

        if (file !== undefined) {
            reader.readAsDataURL(file)
            reader.onload = () => {
                let fileData = {
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };
                files.push(fileData)
                console.log(files)
                if (!(Math.round(file.size / 1000) > 15000)) {
                    if (fileData.base64) {
                        setImg(fileData.base64)
                        setShowImg(true)
                    } else {
                        setShowImg(false)
                    }
                } else {
                    setErrorMsg("File size cannot be more than 16 MB. File won't be uploaded")
                    uploadBtnElement.current.value = ""
                    setImg("")
                    setShowImg(false)
                }

                if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
                    setImg("")
                    setShowImg(false)
                    uploadBtnElement.current.value = ""
                    setErrorMsg("Please select only jpg, jpeg or png file formats")
                }
            }
        } else {
            setImg("")
            setShowImg(false)
        }
    }



    //in case of edit, event prop exists, set states with events fields
    useEffect(() => {
        if (event) {
            setEventName(event.eventName);
            setDescription(event.description);
            setImg(event.img);
            setDate(event.date);
            setTime(event.time);
            setLocation(event.location);
        }
    }, [event]);


    //clear all states
    const clearAllFields = async () => {
        setErrorMsg("")
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
    const submitForm = async (e) => {
        e.preventDefault();
        formElement.current.validateAll()
        // checkIfNull;

        if (!user?.profileObj?.name) {
            clearAllFields();
            return alert("You have to sign in to make a event")
        }
        let chipsArr = chips.split(" ")
        console.log(chipsArr)
        //dispatch call for create event
        dispatch(createEvent(eventName, location, description, img, date, time, endTime, user?.profileObj?.name, chipsArr))
        clearAllFields();
        setShowModal((previousState => !previousState));

    }
    //whenever fields are updated
    const change = (oneElement, property) => {
        setErrorMsg("")
        switch (property) {
            case 'setEventName':
                setEventName(oneElement.target.value);
                break;
            case 'setLocation':
                setLocation(oneElement.target.value);
                break;
            case 'setDescription':
                setDescription(oneElement.target.value);
                break;
            case 'setDate':
                setDate(oneElement.target.value);
                break;
            case 'setTime':
                setTime(oneElement.target.value);
                break;
            case 'setEndTime':
                setEndTime(oneElement.target.value)
                break
            case 'setChips':
                setChips(oneElement.target.value)
                break
            default: break;
        }
    }
    //on fileUpload
    // const onFileUpload = (base64) => {
    //     if (base64) { setImg(base64.base64); }
    // }
    // const addChips = (val) => {
    //     setChips([...chips, val])
    // }

    return (
        <div className='container bg-white h-3/4'>
            {errorMsg ? <>
                <div className="error_message" role="alert">
                    {errorMsg}
                </div>
            </> : null
            }
            <Form onSubmit={(event) => submitForm(event)} ref={formElement} className="form">
                <div className='content_wrapper  px-5 py-10'>
                    {/* depending on which button is clicked(add/edit) change heading */}
                    {isAddModal ? <h1 className="tagline"> Create an Event</h1> : <h1 className="tagline"> Edit  {eventName}</h1>}

                    <fieldset className="column_fieldset">
                        <label> Event Name</label>
                        <input type="text" name="eventName" value={eventName} className="eventName" id="eventName" onChange={(event) => change(event, "setEventName")} required />
                    </fieldset>
                    <fieldset className="column_fieldset">
                        <label> Location</label>
                        <input type="text" name="location" value={location} id="location" onChange={(e) => change(e, "setLocation")} required />
                    </fieldset>
                    <fieldset className="column_fieldset">
                        <label> Description</label>
                        <input type="textarea" value={description} name="desc" className="desc" onChange={(e) => change(e, "setDescription")} placeholder="What's the event about?" required />
                    </fieldset>
                    <div className=''>
                        <fieldset className="column_fieldset col-span-1">
                            <label> Date </label>
                            <input type="date" value={date} name="date" className="desc" onChange={(e) => change(e, "setDate")} required />
                        </fieldset>
                        <fieldset className="column_fieldset col-span-2">
                            <label> Time</label>
                            <input type="time" value={time} name="time" className="desc" onChange={(e) => change(e, "setTime")} />
                        </fieldset>
                    </div>
                    <fieldset className="column_fieldset">
                        <label>End Time</label>
                        <input type="time" value={endTime} name="endTime" className="desc" id="endTime" onChange={(e) => change(e, "setEndTime")} required />
                    </fieldset >
                    <fieldset className="column_fieldset">
                        <label>Tags (Space separated)</label>
                        <input type="text" name="chips" value={chips} id="eventName" onChange={(event) => change(event, "setChips")} required />
                    </fieldset>
                    <fieldset className="column_fieldset right">
                        <label> Image </label>
                        {/* <Input type="file"  accept="image/*" name="image" id="file" /> */}
                        <input
                            type="file"
                            ref={uploadBtnElement}
                            onChange={handleImageContent}
                            onClick={() => setErrorMsg("")}
                        />
                        {/* <FileBase type="file" multiple={false} onDone={(base64) => onFileUpload(base64)} 
                        onClick={() => setErrorMsg("")} /> */}
                    </fieldset>
                    {setShowImg ?
                            <fieldset className="column_fieldset">
                                <img alt="profile" src={img} className="Img"></img>
                            </fieldset>
                            : null
                        }
                    {/* <button onSubmit={(event) => submitForm(event)} className="save" type="submit">Add</button> */}
                    <button className="save" type="submit">{isAddModal ? "Create" : "Update"}</button>
                </div >

                {/* <button className="closeAdd" onClick={()=>closeAdd}>{close}</button> */}
            </Form >

        </div >
    )
}


export default EventCreateUpdate;

