import React from 'react';
import './EventCard.scss';


function EventCard(props){
    const cardElements = props.events
        .map((event, i) =>
        <div key={i} className="card">
            {/* {flagIcon} */}
            {event.eventName}
            <img className="eventImg" src={event.img} alt="event-pic"/>
            <article>{event.description}</article>
            {/* <div className="options">
                {this.props.heartIcon}
                {this.props.scheduleIcon}
            </div>   */}
        </div>
    )
    return (cardElements)
}

export default EventCard