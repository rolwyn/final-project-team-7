import React from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './PopUp.scss';

function PopUp(){
    const [showModal, setShowModal]= useState(false);

    const openModal=()=>{
        setShowModal(prevModal=>!prevModal);
    }
    return (
        <>
        <Container>
            {/* <ModelWrapper showModal={showModal}> */}
            <button onClick={openModal}>Add</button>
            <EventCreation showModal={showModal} setShowModal={setShowModal}></EventCreation>
            {/* </ModelWrapper> */}
        </Container>
        </>
    );
}