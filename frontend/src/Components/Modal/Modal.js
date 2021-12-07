import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function Modal({openModal} ){
    const isAddModal = useSelector((state) => state.modal)
    return (

        <div className="modal_fade">
       
            <div className="modal-body">
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