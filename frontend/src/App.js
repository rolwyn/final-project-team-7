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

    return(
        <div>
            <Navbar isSignup={isSignup} setIsSignup={setIsSignup}/>
            <Router>
                <Routes>
                    {
                        isSignup ? 
                        <Route exact path="/" element={<SignUp/>}/> : 
                        <Route exact path="/" element={
                                <>
                                    <CardLayout/>
                                    <EventCreation/>
                                </>
                            }
                        />
                    }
                </Routes>
            </Router>
        </div>
    )
}

export default App