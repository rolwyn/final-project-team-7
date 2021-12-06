import React, {useState} from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function Modal({showModal,setShowModal,buttonClicked} ){
    // const [renderEventEditOrAdd, setRender]=useState();
    // if(buttonClicked==="add")
    // {
    //     setRender(true)
    // }
    // else 
    // {
    //     setRender(false)
    // }

    return (

        <div className="modal_fade">
       
            <div className="modal-body">
                jadbhajsdbjha
                
                {buttonClicked?<EventCreation showModal={showModal} setShowModal={setShowModal}></EventCreation>: console.log("Button clicked is false")}
                
            </div>
            <div className="modal-close">
                     <img src="assets/images/close.png"/>
            </div>
            
          
      </div>
      
    );
}