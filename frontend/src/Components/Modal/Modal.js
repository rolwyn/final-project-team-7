import React, {useState} from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function PopUp({showModal,setShowModal,buttonClicked} ){
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

        <div class="modal_fade">
       
            <div class="modal-body">
                jadbhajsdbjha
                
                {/* {renderEventEditOrAdd?<EventCreation showModal={showModal} setShowModal={setShowModal}></EventCreation>: null} */}
                
            </div>
            <div class="modal-close">
                     <img src="assets/images/close.png"/>
            </div>
            
          
      </div>
      
    );
}