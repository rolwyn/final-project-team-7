import React from 'react';

const Navbar = ({user, isSignup, setIsSignup}) => {
    return(
        <nav>
            Welcome, {user?.profileObj.name} 
            {user.profileObj === undefined ? <button onClick={() => setIsSignup(!isSignup)}>Login</button> : null}
        </nav>
    )
}

export default Navbar