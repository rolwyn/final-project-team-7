import React, {useState} from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function Modal({showModal,openModal,isAddModal, setShowModal} ){
    
    return (

        <div className="modal_fade">
            <div className='popup'>
                <div className="modal-body">
                    test text remove later
                    
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
            
          
      </div>
      
    );
}