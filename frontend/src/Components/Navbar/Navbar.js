import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import './Navbar.scss';

const Navbar = ({ user, setUser, isSignup, setIsSignup,  setButtonClicked, openModal }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    // setShowModal(true)
    dispatch({ type: "" })
    navigate('/')
  }



  return (
    <nav>
      <div>
        <ul className='container'>
          <li className='logo'>Events Tracker</li>


          {user?.profileObj === undefined ?
            <li>
              <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
                <a href="/auth">Login</a>
              </button>
            </li> :
            <div>
              <li> <button>
                <Avatar className='rounded-full flex items-center flex-shrink-0 profilebtn' size="50" round={true} alt={user?.profileObj.name.charAt(0)} src={user?.profileObj?.imageUrl} type="button" onClick={() => dispatch({ type: "ISSIGNIN" })}>
                  {user?.profileObj.name.charAt(0)}
                </Avatar>
              </button></li>
              <li><button className='addbtn' onClick={()=>{
              openModal()
              setButtonClicked(true);
            }}></button></li>
              <li> <button className='addbtn' onClick={() => dispatch({ type: "ISNOTSIGNIN" })}> Home </button> </li>
              <li><button className='loginbtn' onClick={logout}>Logout
              </button>
              </li>
            </div>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
