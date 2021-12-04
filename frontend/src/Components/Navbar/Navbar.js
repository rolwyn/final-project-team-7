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
        console.log('add event is called');
        
        dispatch({ type: "CREATE" })
        navigate('/')
    }

    useEffect(() => {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('userProfile')))
    }, [location])


    return (
        <nav>

            <button className='navbar-username'>
                <a href="/">
                    Welcome, {user !== null ? user?.profileObj?.name : 'Guest'}
                </a>
            </button>
            {user?.profileObj === undefined ?
                <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
                    <a href="/auth">Login</a>
                </button> :
                <div>
                    <button className='addbtn' onClick={addEvent}>
                    <a href="/">Add</a>
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
