import React, { useEffect } from 'react';

const Navbar = ({user, setUser, isSignup, setIsSignup}) => {
    console.log(user)

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('userProfile')))
    },[])

    return(
        <nav>
            Welcome, {user !== null ? user?.profileObj?.name : 'Guest'} 
            {user?.profileObj === undefined ? <button onClick={() => setIsSignup(!isSignup)}>Login</button> : null}
        </nav>
    )
}

export default Navbar