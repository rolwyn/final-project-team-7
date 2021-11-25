import React from 'react';
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';

function App() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SignUp/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App