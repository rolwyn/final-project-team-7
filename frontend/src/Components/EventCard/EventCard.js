import React from 'react';
import './EventCard.scss';


function EventCard(props){
    return (
        <div className="card">
            {/* {flagIcon} */}
            {props.event.eventName}
            <img className="eventImg" src={props.event.img} alt="event-pic"/>
            <article>{props.event.description}</article>
            {/* <div className="options">
                {this.props.heartIcon}
                {this.props.scheduleIcon}
            </div>   */}
        </div>
    )
}

export default EventCard