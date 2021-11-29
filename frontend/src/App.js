import React from 'react';
import { Route, Routes, BrowserRouter as Router, Swich } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';

function App() {
    return(
        <div>
            <Navbar>               
            </Navbar>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SignUp/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App