import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.scss';

const Navbar = ({ user, setUser, isSignup, setIsSignup }) => {
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
    }, [location])


    return (
        <nav>
            
            <a href="/" className="logo">
                LOGO
            </a>
            <a href="/" className='navbar-username'>
                Welcome, {user !== null ? user?.profileObj?.name : 'Guest'}
            </a>
            
      
        {user?.profileObj === undefined ?
                <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
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
