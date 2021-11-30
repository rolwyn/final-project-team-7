import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import CardLayout from './Components/CardLayout/CardLayout.js'
import EventCreation from './Components/EventCreation/EventCreation';
function App() {
    const [isSignup, setIsSignup] = useState(false)

    return(
        <div>
            <nav>
                hello
                <button onClick={() => setIsSignup(!isSignup)}>Login</button>
            </nav>
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