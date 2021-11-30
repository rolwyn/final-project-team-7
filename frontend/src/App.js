import React from 'react';
import { useEffect, useState } from 'react';
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
                        <Route exact path="/" element={<h1>Hello Cards</h1>}/>
                    }
                </Routes>
            </Router>
            {/*Added event creation ui using below element*/}
            <CardLayout></CardLayout>
            <EventCreation></EventCreation>
        </div>
    )
}

export default App