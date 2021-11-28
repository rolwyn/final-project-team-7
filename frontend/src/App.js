import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import React from 'react';
import CardLayout from './Components/CardLayout'
function App() {
    return(
        <div>
            <Router>
                <Routes>
                    {/* <Route exact path="/" element={<SignUp/>}/> */}
                    <Route exact path="/" element={<CardLayout/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App