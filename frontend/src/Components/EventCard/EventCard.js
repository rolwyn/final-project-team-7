import React, { useState, useEffect } from 'react';
import './EventCard.scss';
import {likeEvent, deleteEvent} from '../../Actions/events'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EventCard(props){
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userProfile'))
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
    const handleEdit = (e) => {
        e.preventDefault()
        
        console.log("Edit clicked")
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteEvent(props.event.id))
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