import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useLinkClickHandler } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Utils/Design-Tokens/CommonScssUtil.scss'
import { getEventsBySearch } from '../../Actions/events'

const Navbar = ({ user, setUser, isSignup, setIsSignup, openModal }) => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    function useQuery() {
        return new URLSearchParams(location.search);
    }
    
    const query = useQuery()
    const searchQuery = query.get('searchQuery')

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

    /**
     * Search post using dispatch
     */
    const searchEvent = () => {
        if (search.trim()) {
            // do dispatch
			dispatch(getEventsBySearch({ search }))
        } else {
            navigate('/')
        }
    }

    const handleKeyPress = (e) => {
		// enter key is pressed
        if (e.charCode === 13) {
			console.log("enter key is pressed")
            searchEvent()
        }
    }

	return (
		<header>
			<nav className="navbar_nav">
				<div className="brand_logo" onClick={() => dispatch({ type: "ISNOTSIGNIN" })}>
					<div className='logo'><img alt="brandlogo" src="assets/images/logo.png"></img></div>
				</div>
				<div className="actionWrapper">
					<div className="searchBar">
						<input name="search" placeholder="Search Events" value={search} 
                            onKeyPress={handleKeyPress}
                            onChange={(e)=> {setSearch(e.target.value)}}>
                        </input>
                        <button onClick={searchEvent} type="button">Search</button>
					</div>
					<ul className="nav_container">
						{user?.profileObj === undefined ?
							<li>
								<button className='navbtn' onClick={() => setIsSignup(!isSignup)}>
									<a href="/auth">Login</a>
								</button>
							</li>
							:
							<>
							<li> 
								<button>
									<Avatar className='rounded-full flex items-center flex-shrink-0 profilebtn' size="50" round={true} alt={user?.profileObj.name.charAt(0)} 
										src={user?.profileObj?.imageUrl} name={user.profileObj.givenName + " " + user.profileObj.familyName} maxInitials={2} 
										type="button" onClick={() => dispatch({ type: "ISSIGNIN" })}>
									</Avatar>
								</button>
							</li>
							<li>
							<button className='addbtn' onClick={()=>{
								dispatch({ type: "ISADD" })
								openModal()
							}}>
								<FontAwesomeIcon icon="plus-circle" />&nbsp;Add
							</button>
							</li>

							<li><button className='navbtn' onClick={logout}><FontAwesomeIcon icon="sign-out-alt" />&nbsp;Logout</button></li>
							</>
						}
					</ul>
				</div>
			</nav>
		</header>
  	)
}

export default Navbar
