import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import CardLayout from './Components/CardLayout/CardLayout.js'
import EventCreation from './Components/EventCreation/EventCreation';
function App() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SignUp/>}/>
                    {/* <Route exact path="/" element={<CardLayout/>}/> */}
                    {/* <Route exact path="/" element={<EventCreation>}/> */}
                </Routes>
            </Router>
            {/*Added event creation ui using below element*/}
            {/* <EventCreation></EventCreation> */}
        </div>
    )
}

export default App