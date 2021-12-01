import React from 'react';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import CardLayout from './Components/CardLayout/CardLayout.js'
import EventCreation from './Components/EventCreation/EventCreation';
import Navbar from './Components/Navbar/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee, faArrowCircleLeft)

function App() {
    const [isSignup, setIsSignup] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')))


    return(
        <div>
            <Navbar user={user} setUser={setUser} isSignup={isSignup} setIsSignup={setIsSignup}/>
                <Routes>
                <Route exact path="/auth" element={<SignUp user={user}/>}/> 

         
                        <Route exact path="/" element={
                                <>
                                    <CardLayout/>
                                    <EventCreation/>
                                </>
                            }/>
                </Routes>
        </div>
    )
}

export default App