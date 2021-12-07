import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function Modal({openModal, event, setShowModal} ){
    const isAddModal = useSelector((state) => state.modal)
    console.log(event)
    return (

        <div className="modal_fade">
       
            <div className="modal-body">
                { 
                isAddModal?<EventCreation setShowModal={setShowModal}></EventCreation>:
                    <EventCreation setShowModal={setShowModal} event={event}></EventCreation>    
                }
                
            </div>
            {/*  */}
            <div className="modal-close" >
                <img src="assets/images/close.png" onClick={()=>setShowModal(prev=>!prev)}/>
            </div>
            
          
      </div>
      
    );
}