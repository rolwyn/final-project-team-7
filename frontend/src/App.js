import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import CardLayout from './Components/CardLayout/CardLayout.js'
import EventCreation from './Components/EventCreation/EventCreation';
import Navbar from './Components/Navbar/Navbar';

function App() {
    const [isSignup, setIsSignup] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')))


    return(
        <div>
            <Navbar user={user} setUser={setUser} isSignup={isSignup} setIsSignup={setIsSignup}/>
            <Router>
                <Routes>
                <Route exact path="/auth" element={<SignUp user={user}/>}/> 

         
                        <Route exact path="/" element={
                                <>
                                    <CardLayout/>
                                    <EventCreation/>
                                </>
                            }/>
                </Routes>
            </Router>
        </div>
    )
}

export default App