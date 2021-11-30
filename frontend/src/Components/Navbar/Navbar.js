import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({user, setUser, isSignup, setIsSignup}) => {
    console.log(user)
    const location = useLocation()

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('userProfile')))
    },[location])

    return(
        <nav>
            Welcome, {user !== null ? user?.profileObj?.name : 'Guest'} 
            {user?.profileObj === undefined ? <button onClick={() => setIsSignup(!isSignup)}><a href="/auth">Login</a></button> : null}
        </nav>
    )
}

export default Navbar