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
            return props.event.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? 
            (<><FontAwesomeIcon className='_liked' icon="heart" /></>) : 
            (<><FontAwesomeIcon className='_liked' icon="heart" /></>)
        } 
        return (<><FontAwesomeIcon icon="heart" /></>)
    }
    
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
        dispatch(deleteEvent(props.event.id))
    }

    return (
        <div className="card">
            {/* {flagIcon} */}
            {props.event.eventName}<br/>
            by {props.event.name}
            <img className="eventImg" src={props.event.img} alt="event-pic"/>
            <article>{props.event.description}</article>
            {(user) ? <button onClick={handleLike}><Hearts /></button>
            :
                <span>
                    <FontAwesomeIcon className="_liked"icon="heart"/>
                    <span>{props.event.likes.length}</span>
                </span>
            }
            {/* {if(user?.profileObj?.username===props.event.username)} */}
            {(user?.profileObj?.googleId === props.event.creator || user?.profileObj?._id === props.event.creator) && <button onClick={handleEdit}><FontAwesomeIcon icon="edit" /></button>}
            {(user?.profileObj?.googleId === props.event.creator || user?.profileObj?._id === props.event.creator) && <button onClick={handleDelete}>Delete</button>}
        </div>
    )
}

export default EventCard