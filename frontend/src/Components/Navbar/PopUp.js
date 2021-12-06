import React, {useState} from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './PopUp.scss';

export default function PopUp(){
    const [showModal, setShowModal]= useState(false);

    const openModal=()=>{
        setShowModal(prevModal=>!prevModal);
    }
    return (
        <>
        <div>
            {/* <ModelWrapper showModal={showModal}> */}
            <button onClick={openModal}>Add</button>
            <EventCreation showModal={showModal} setShowModal={setShowModal}></EventCreation>
            {/* </ModelWrapper> */}
        </div>
        </>
    );
}