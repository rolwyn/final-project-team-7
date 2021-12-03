import React from 'react';
import './EventCard.scss';


function EventCard(props){
    return (
        <div className={props.childClassName}>
            {/* {flagIcon} */}
            {props.eventName}
            <img className="eventImg" src={props.img} alt="event-pic"/>
            <article>{props.description}</article>
            {/* <div className="options">
                {this.props.heartIcon}
                {this.props.scheduleIcon}
            </div>   */}
        </div>
    )
}

export default EventCard