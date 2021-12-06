import React from 'react';
import './PopUp.scss';

function PopUp(){
    const [showModal, setShowModal]= useState(false);
    return (
        <>
        <Container>
            <ModelWrapper showModal={showModal}>
            <EventCreation></EventCreation>
            </ModelWrapper>
        </Container>
        </>
    );
}