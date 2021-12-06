import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import './CardLayout.scss'
import EventCard from '../EventCard/EventCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function CardLayout({isSignup, isAddModal, openModal}){

    const eventData = useSelector((state) => state.events)
    const isNotHomePage = useSelector((state) => state.profile)
    const user = JSON.parse(localStorage.getItem('userProfile'))

    useEffect(() => {
    },[isNotHomePage]);

    useEffect(() => {
        console.log(eventData)
    },[eventData])

    // eventData.reverse()
    // console.log(eventData[0].creationDate)
    // eventData.sort((a,b) => dates.compare(a.creationDate, b.creationDate))
    return (
        // !eventData ? <div className="page_loader"><FontAwesomeIcon spin={true} icon="spinner"/></div> : <>Hi</>
        
        isNotHomePage ?
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