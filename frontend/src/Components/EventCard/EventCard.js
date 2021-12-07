import React, { useState, useEffect } from 'react';
import './EventCard.scss';
import {likeEvent, deleteEvent} from '../../Actions/events'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EventCard(props){
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userProfile'))
    let gapi = window.gapi
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const API_KEY = process.env.REACT_APP_KUSH_CALENDER_API_KEY
    let DISCOVERY_DOCS =  ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    let SCOPES = "https://www.googleapis.com/auth/calendar"
    // const [isEventLiked, setIsEventLiked] = useState(isLiked(props, user))

    const Hearts = () => {
        console.log(props.event.likes)
        if(props.event.likes.length > 0){
            console.log("IN HERE")
            if(props.event.likes.find((id) => id === user?.profileObj?.googleId || id === user?.profileObj?._id) !== undefined){
                return (<><FontAwesomeIcon className='_liked' icon="heart" /></>)
            } 
            return (<><FontAwesomeIcon icon="heart" /></>)
        } 
        return (<><FontAwesomeIcon icon="heart" /></>)
    }
    
    const handleLike = (e) => {
        e.preventDefault()
        dispatch(likeEvent(props.event.id))
    }

    // onClick={handleEdit}
    // const handleEdit = (e) => {
    //     e.preventDefault()
        
    //     console.log("Edit clicked")
    // }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteEvent(props.event.id))
    }

    const handleSchedule = (e) => {
        e.preventDefault()

        gapi.load('client:auth2', () => {
            console.log('loaded client')
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })
            console.log(API_KEY, CLIENT_ID)
            gapi.client.load('calendar', 'v3', () => console.log("loaded calendar"))

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                let event = {
                    'summary': props.event.eventName,
                    'location': props.event.location,
                    'description': props.event.description,
                    'start': {
                      'dateTime': `${props.event.date}T${props.event.time}:00-00:00`,
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': `${props.event.date}T${props.event.time}:50-00:00`,
                      'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    // 'attendees': [
                    //   {'email': 'lpage@example.com'},
                    //   {'email': 'sbrin@example.com'}
                    // ],
                    // 'reminders': {
                    //   'useDefault': false,
                    //   'overrides': [
                    //     {'method': 'email', 'minutes': 24 * 60},
                    //     {'method': 'popup', 'minutes': 10}
                    //   ]
                    // }
                }

                let req = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event,
                })

                req.execute(event => {
                    console.log(event)
                    window.open(event.htmlLink)
                })
            })
        })
        
    }
    return (
        <div className="card">
            <div className="iconContainer">
                <span>
                    <span className="like-counter">{props.event.likes.length}</span>
                    <button disabled={!user?.profileObj} onClick={handleLike}><Hearts /></button>
                </span>
                {/* :
                <span>
                        <FontAwesomeIcon className="_liked"icon="heart"/>
                        <span>{props.event.likes.length}</span>
                    </span>
                } */}
                
                <button disabled={props.event.scheduled.find((id) => id === user?.profileObj?.googleId || id === user?.profileObj?._id) !== undefined} className="_editIcon" onClick={handleSchedule}>Schedule</button>
                {(user?.profileObj?.googleId === props.event.creator || user?.profileObj?._id === props.event.creator) && 
                    <button className="_editIcon" onClick={()=>{
                        dispatch({ type: "ISEDIT" })
                        props.openModal()
                  }}
                     >
                    <FontAwesomeIcon icon="edit" /></button>}
                {(user?.profileObj?.googleId === props.event.creator || user?.profileObj?._id === props.event.creator) && 
                    <button className="_editIcon" onClick={handleDelete}><FontAwesomeIcon icon="trash" /></button>}
            </div>
            <div className="overlay"></div>
            <img className="eventImg" src={props.event.img} alt="event-pic"/>
            {/* {flagIcon} */}
            <div className="cardContent">
                <div className="eventTitle">
                    {props.event.eventName}
                    <span> by </span>
                    {props.event.name}
                </div>
                <div className="eventDesc">{props.event.description}</div>
            </div>
        </div>
    )
}

export default EventCard