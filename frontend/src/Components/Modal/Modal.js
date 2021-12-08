import React from 'react';
import { useSelector } from 'react-redux';
import EventCreation from '../EventCreation/EventCreation';
import './Modal.scss'

export default function Modal({ openModal, event, setShowModal }) {
    const isAddModal = useSelector((state) => state.modal)
    return (

        <div className="modal_fade">
            <div className='popup'>
                <div className="modal-body" >
                    {
                        isAddModal ? <EventCreation setShowModal={setShowModal}></EventCreation> :
                            <EventCreation setShowModal={setShowModal} event={event}></EventCreation>
                    }
                </div>
                {/*  */}
                <div className="modal-close" >
                    <img src="assets/images/close.png" alt="close-button" onClick={() => setShowModal(prev => !prev)} />
                </div>
            </div>
        </div>

    );
}