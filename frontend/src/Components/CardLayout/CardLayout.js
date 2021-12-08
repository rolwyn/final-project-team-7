import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import './CardLayout.scss'
import EventCard from '../EventCard/EventCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function CardLayout({isSignup, isAddModal, openModal}){

    const eventData = useSelector((state) => state.events)
    const isNotHomePage = useSelector((state) => state.profileReducer)
    const isFavPage = useSelector(state => state.favReducer)
    const user = JSON.parse(localStorage.getItem('userProfile'))

    useEffect(() => {
    },[isNotHomePage, isFavPage]);

    useEffect(() => {
    },[eventData])

    return (
        
        isNotHomePage || isFavPage ?
        (isNotHomePage ?
        !eventData.filter((event) => event.creator === user?.profileObj?._id || event.creator === user?.profileObj?.googleId).length ? <div className="cards_container">you have no posts yet</div> : 
            <div className="cards_container">    
        { 
            eventData.filter((event) => event.creator === user?.profileObj?._id || event.creator === user?.profileObj?.googleId).map(event=>(
                <EventCard openModal={openModal}
                    key={event.id}
                    event={event}
                    
                />
            
            ))
        }
        </div> 
        : 
        (!eventData.filter((event) => event.likes.find((id) => id === user?.profileObj?.googleId || id === user?.profileObj?._id) !== undefined)).length ? <div className="cards_container">you have no posts yet</div> : 
            <div className="cards_container">    
        { 
            eventData.filter((event) => event.likes.find((id) => id === user?.profileObj?.googleId || id === user?.profileObj?._id) !== undefined).map(event=>(
                <EventCard openModal={openModal}
                    key={event.id}
                    event={event}
                    
                />
            
            ))
        }
        </div>  
        )
        :
         
        !eventData.length ? <div className="page_loader"><FontAwesomeIcon spin={true} icon="spinner"/></div> : 
            
            <div className="cards_container">    
        { 
            
            eventData.map(event=>(
                <EventCard
                    openModal={openModal}
                    key={event.id}
                    event={event}
                />
            
            ))
        }
        </div>
    );
        
}
 
export default CardLayout;