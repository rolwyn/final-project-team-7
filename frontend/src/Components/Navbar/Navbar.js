import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import './Navbar.scss';

const Navbar = ({ user, setUser, isSignup, setIsSignup }) => {
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
        dispatch({ type: "" })
        navigate('/')
    }

  //const profileImg = user.imageurl;
  //console.log(user.profileObj, typeof user.profileObj);
  //console.log(user.profileObj.imageUrl);




  return (
    <header>
        <nav class="navbar_nav">
            <div className="brand_logo" onClick={() => dispatch({ type: "ISNOTSIGNIN" })}>
                <div className='logo'><img alt="brandlogo" src="assets/images/logo.png"></img></div>
            </div>
            <ul className="nav_container">
                {user?.profileObj === undefined ?
                    <li>
                    <button className='loginbtn' onClick={() => setIsSignup(!isSignup)}>
                        <a href="/auth">Login</a>
                    </button>
                    </li> 
                    :
                    <>
                    <li> 
                        <button>
                            <Avatar src={user?.profileObj.imageUrl} type="image" className='rounded-full flex items-center flex-shrink-0 profilebtn' size="50" round={true} onClick={() => dispatch({ type: "ISSIGNIN" })}
                            />
                        </button>
                    </li>
                    <li><button className='addbtn' onClick={addEvent}>Add</button></li>
                    <li><button className='addbtn'> Home </button> </li>
                    <li><button className='loginbtn' onClick={logout}>Logout</button></li>
                    </>
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
