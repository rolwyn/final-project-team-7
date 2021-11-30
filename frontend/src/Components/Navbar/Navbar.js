import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = ({user, setUser, isSignup, setIsSignup}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const logout = () => {
       dispatch({ type: "LOGOUT" }) 
       navigate('/')
    }

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('userProfile')))
    },[location])

    return(
        <nav>
            Welcome, {user !== null ? user?.profileObj?.name : 'Guest'} 
            {user?.profileObj === undefined ? 
                <button onClick={() => setIsSignup(!isSignup)}>
                    <a href="/auth">Login</a>
                </button> : 
                <button onClick={logout}>
                    Logout
                </button>
            }
        </nav>
    )
}

export default Navbar