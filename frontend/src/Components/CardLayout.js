import React, { Component } from 'react';
import './CardLayout.scss'
class CardLayout extends React.Component {
    favourite=()=>{
        const heart=document.querySelectorAll('.heart');

        heart.forEach((h)=>{
            const children=h.childNodes;
            const svg=children[0];
            const color =svg.getAttribute('fill');
            if(color==="grey")
            {
                svg.setAttribute("fill","red");
            }
            else
            {
                svg.setAttribute("fill","grey");
            }
            
        })
    }
    schedule=()=>{
        const time=document.querySelectorAll('.schedule');

        time.forEach((t)=>{
            const children=t.childNodes;
            const svg=children[0];
            const color =svg.getAttribute('fill');
            if(color==="grey")
            {
                svg.setAttribute("fill","green");
            }
            else
            {
                svg.setAttribute("fill","grey");
            }
            
        })
    }
    render() { 
        // const content ;
        const heart = <div className="heart" onClick={this.favourite}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>;;
        const schedule= <div className="schedule" onClick={this.schedule}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> </div>;
        return (
            <div class="cards-container">
                <div class="card">
                    <img src="" alt="event-image"/>
                    <div class="options">
                    {heart}
                    {schedule}
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default CardLayout;