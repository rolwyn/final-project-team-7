import React from 'react';
import './CardLayout.scss'
function CardLayout(){

    const favourite=()=>{
        
        const heart=document.querySelectorAll('.heart');
        //const flag=document.querySelectorAll('.flag')
        heart.forEach((h)=>{
            const children=h.childNodes;
            const svg=children[0];
            const color =svg.getAttribute('fill');
            
            if(color==="grey")
            {
                svg.setAttribute("fill","red");
                //flag.childNodes[0].style.display="block";

            }
            else
            {
                svg.setAttribute("fill","grey");
                //flag.childNodes[0].style.display="none";
            }
            
        })
    }
    const schedule=()=>{
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
    // const file=(event)=>{
    //     console.log(event.target.files[0]);
    // }

        // const content ;
        const heartIcon = <div className="heart" onClick={favourite}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>;;
        const scheduleIcon= <div className="schedule" onClick={schedule}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> </div>;
        const flagIcon=<div className="flag">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/></svg></div>
        return (
            <React.Fragment>
            <div className="cards-container">
                <div className="card">
                    {flagIcon}
                    <img  src="" alt="event-pic"/>
                    <div className="options">
                    {heartIcon}
                    {scheduleIcon}
                    <i className="fas fa-heart"></i>  
                    </div>
                    
                </div>
               
            </div>
             
             </React.Fragment>    
        );
    
}
 
export default CardLayout;