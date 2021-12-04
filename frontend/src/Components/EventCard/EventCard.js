import React from 'react';
import './EventCard.scss';
import {likeEvent, deleteEvent} from '../../Actions/events'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function EventCard(props){
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userProfile'))


    const handleLike = (e) => {
        e.preventDefault()
        dispatch(likeEvent(props.event.id))
        console.log(props.event.likes.length)
    }

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
            {/* {flagIcon} */}
            {props.event.eventName}<br/>
            by {props.event.name}
            <img className="eventImg" src={props.event.img} alt="event-pic"/>
            <article>{props.event.description}</article>
            {(user) && <button onClick={handleLike}><FontAwesomeIcon className={props.event.likes.length !== 0 ? "_liked": ''} icon="heart" /></button>}
            <button onClick={handleEdit}><FontAwesomeIcon icon="edit" /></button>
            {(user?.profileObj?.googleId === props.event.creator || user?.profileObj?._id === props.event.creator) && <button onClick={handleDelete}>Delete</button>}
        </div>
    )
}

export default EventCard