import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import './CardLayout.scss'
import EventCard from '../EventCard/EventCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function CardLayout({isSignup}){

    const eventData = useSelector((state) => state.events)
    const isLoggedIn = useSelector((state) => state.profile)
    const user = JSON.parse(localStorage.getItem('userProfile'))

    useEffect(() => {
    },[isLoggedIn]);

    return (
        user?.profileObj ?
        !eventData.filter((event) => event.creator === user?.profileObj?._id || event.creator === user?.profileObj?.googleId).length ? <div className="page_loader"><FontAwesomeIcon spin={true} icon="spinner"/></div> : 
            <div className="cards_container">    
        { 
            eventData.filter((event) => event.creator === user?.profileObj?._id || event.creator === user?.profileObj?.googleId).map(event=>(
                <EventCard
                    key={event.id}
                    event={event}
                />
            
            ))
        }
        </div>
        : 
        !eventData.length ? <div className="page_loader"><FontAwesomeIcon spin={true} icon="spinner"/></div> : 
            <div className="cards_container">    
        { 
            eventData.map(event=>(
                <EventCard
                    key={event.id}
                    event={event}
                />
            
            ))
        }
        </div>
    );
    
}
 
export default CardLayout;