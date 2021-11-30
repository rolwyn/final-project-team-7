import React from 'react';

const Navbar = ({isSignup, setIsSignup}) => {
    return(
        <nav>
            <button onClick={() => setIsSignup(!isSignup)}>Login</button>
        </nav>
    )
}

export default Navbar