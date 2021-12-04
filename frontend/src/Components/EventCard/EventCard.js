import React from 'react';
import './EventCard.scss';
import {likeEvent} from '../../Actions/events'
import { useDispatch } from 'react-redux';


function EventCard(props){
    const dispatch = useDispatch()


    const handleLike = (e) => {
        e.preventDefault()
        dispatch(likeEvent(props.event.id))
        
    }

    const handleEdit = (e) => {
        e.preventDefault()
        console.log("Edit clicked")
    }

    const handleDelete = (e) => {
        e.preventDefault()
        console.log("Delete clicked")
    }

    return (
        <div className="card">
            {/* {flagIcon} */}
            {props.event.eventName}<br/>
            by {props.event.name}
            <img className="eventImg" src={props.event.img} alt="event-pic"/>
            <article>{props.event.description}</article>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default EventCard