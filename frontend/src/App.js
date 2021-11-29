import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from './Views/SignUp/SignUp';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';

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
        </div>
    )
}

export default App