import React from 'react';


function EventCard(props){
    return (
        <div className="card">
            {/* {flagIcon} */}
            {props.eventName}
            <img src={props.img} alt="event-pic"/>
            <article>{props.description}</article>
            {/* <div className="options">
                {this.props.heartIcon}
                {this.props.scheduleIcon}
            </div>   */}
        </div>
    )
}

export default EventCard