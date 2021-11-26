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
    render() { 
        // const content ;
        const heart = <div className="heart" onClick={this.favourite}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>;
        
        return (
            <div class="cards-container">
                <div class="card">
                    <img src="" alt="event-image"/>
                    <div class="options">
                    {heart}

                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default CardLayout;