import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.scss';
import EventCreation from '../EventCreation/EventCreation.js'
// import { Transition } from "@headlessui/react";
// import { Disclosure, Menu } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'




const Navbar = ({ user, setUser, isSignup, setIsSignup }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  // const logout = () => {
  //   dispatch({ type: "LOGOUT" })
  //   navigate('/')
  // }
  // //need to add logic for create
  // const addEvent = () => {
  //   console.log('add event is called');
  //   dispatch({ type: "CREATE" })
  //   navigate('/')
  // }
  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('userProfile')))
  }, [location])

  //need to add logic for create
  // const addEvent = () => {
  //   dispatch({ type: "" })
  //   navigate('/')
  // }

  // const loadUserEvents = () => {
  //     dispatch({type: "ISNOTSIGNIN"})
  //     console.log(issignin)
  //     console.log("reached here")

  const isLoggedIn = useSelector((state) => state.profile)

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    dispatch({ type: "ISNOTSIGNIN" })
    navigate('/')
  }
  //need to add logic for create
  const addEvent = () => {
    dispatch({ type: "" })
    navigate('/')
  }

  //const profileImg = user.imageurl;


  return (
    <nav>

      <button className='navbar-username'>
        <div onClick={() => dispatch({ type: "ISNOTSIGNIN" })}>
          Welcome, {user !== null ? user?.profileObj?.name : 'Guest'}
        </div>
      </button>
      {user?.profileObj === undefined ?
        <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
          <a href="/auth">Login</a>
        </button> :
        <div>
          <button className='profilebtn' type="button" onClick={() => dispatch({ type: "ISSIGNIN" })}>
            profile
          </button>
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