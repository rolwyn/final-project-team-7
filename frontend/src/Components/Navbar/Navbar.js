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
//need to add logic for create
    const addEvent = () => {
        dispatch({ type: "" })
        navigate('/')
    }

    // const loadUserEvents = () => {
    //     dispatch({type: "ISNOTSIGNIN"})
    //     console.log(issignin)
    //     console.log("reached here")
        
    // }

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('userProfile')))
    }, [location])


    return (
        <nav> 
           
            <button className='navbar-username'>
                <div onClick={() => dispatch({type: "ISNOTSIGNIN"})}>
                    Welcome, {user !== null ? user?.profileObj?.name : 'Guest'}
                </div>
            </button>
            {user?.profileObj === undefined ?
                <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
                    <a href="/auth">Login</a>
                </button> :
                <div>
                    <button type="button" onClick={() => dispatch({type: "ISSIGNIN"})}>hello</button>
                    <button className='addbtn' onClick={addEvent}>
                        Add
                    </button>
                    <button className='loginbtn' onClick={logout}>
                        Logout
                    </button>
                </div>
                
            }
           
           
        </nav>
    )
}

export default Navbar
