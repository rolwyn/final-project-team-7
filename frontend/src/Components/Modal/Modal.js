import React, {useState} from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function Modal({showModal,openModal,isAddModal, setShowModal} ){
    
    return (

        <div className="modal_fade">
       
            <div className="modal-body">
                jadbhajsdbjha
                
                {/* {console.log("EditModal true") : */}
                {isAddModal?<EventCreation></EventCreation>:
                    <h1>Edit modal</h1>
                    
                }
                
            </div>
            {/* onClick={setShowModal(false)} */}
            <div className="modal-close" >
                <img src="assets/images/close.png"/>
            </div>
            
          
      </div>
      
    );
}