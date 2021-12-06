import React, {useState} from 'react';
import EventCreation  from '../EventCreation/EventCreation';
import './Modal.scss'


export default function PopUp(){
    const [showModal, setShowModal]= useState(false);

    const openModal=()=>{
        setShowModal(prevModal=>!prevModal);
    }
    

    return (

        <div class="modal_fade">
        {/* <div class="modal_dialog">
          
            
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
             */}
            <div class="modal-body">
                <EventCreation showModal={showModal} setShowModal={setShowModal}></EventCreation>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          {/* </div>
        </div> */}
      </div>
        // <>
        // {/* <div> */}
        //     {/* <ModelWrapper showModal={showModal}> */}
        //     <button onClick={openModal}>Add</button>
        //     {/* <div className="Background">
        //         <div className="ModalWrapper"> */}
        //             <EventCreation showModal={showModal} setShowModal={setShowModal}></EventCreation>
        //             {/* <div className="CloseModalButton" onClick={()=>setShowModal(prev=>!prev)}></div> */}
        //         {/* </div>
        //     </div> */}
        // {/* </div> */}
        // </>
    );
}