import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import CardLayout from './Components/CardLayout/CardLayout.js'
import EventCreation from './Components/EventCreation/EventCreation';
import Navbar from './Components/Navbar/Navbar';
import { useDispatch } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faArrowCircleLeft, faSpinner, faHeart, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { getEvents } from './Actions/events';
//for displaying map
import Map from './Components/Map/DisplayMap'
//import for Footer
import Footer from './Components/Footer/Footer'
//import for PopUP
import PopUp from './Components/Navbar/PopUp'
import Modal from './Components/Modal/Modal.js'

library.add(fab, faCoffee, faArrowCircleLeft, faSpinner, faHeart, faEdit, faTrash)

function App() {
    const [isSignup, setIsSignup] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')))
    const dispatch = useDispatch()

    const [showModal, setShowModal]= useState(false);
    // const [buttonClicked, setButtonClicked]=useState("");
    const openModal=(callFrom)=>{
        // if(callFrom==="add")
        // {
        //     setButtonClicked("add");
        // }
        // else if (callFrom==="edit")
        // {
        //     setButtonClicked("edit");
        // }
        // else{
        //     setButtonClicked("");
        // }
        // console.log("i am in modal")
        setShowModal(prevModal=>!prevModal);
        

    }

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])


    return (
        <div>
            {/* {showModal? <Modal openModal={openModal} buttonClicked={buttonClicked}/>: null} */}
            {showModal? <Modal openModal={openModal} />: null}
            
            <Navbar user={user} setUser={setUser}  showModal={showModal}  openModal={openModal}isSignup={isSignup} setIsSignup={setIsSignup} />
            <Routes>
                <Route exact path="/auth" element={<SignUp user={user} />} />
        

                <Route exact path="/" element={
                    <>
                        <CardLayout openModal={openModal}/>
                        
                        {/* <EventCreation /> */}
                        {/* <Map /> */}
                        <Footer/>
                    </>
                } />
            </Routes>
        </div>
    )
}

export default App