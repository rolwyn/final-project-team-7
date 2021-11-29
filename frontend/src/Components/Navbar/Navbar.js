import React from "react";
import './Navbar.scss';
import { Avatar, Toolbar, Button, Typography } from '@material-ui/core/';
import  { Link } from 'react-router-dom';

const user = null;

const Navbar = () => {
  return (
  <nav>
    <span className="navbar" ></span>
    <h1 className="title">Events Page</h1>
    <Toolbar>
      {user ? (
        <div className="profile">
            <Avatar className="avatar" alt={user.result.name} src={user.result.imageurl}> {user.result.name.charAt(0)}
             <button className="logout"> Logout </button> 
            </Avatar>
        </div>
      ) : (
        <div>
          <button type="button" component={Link} to="/auth"  className="loginbtn">Sign In</button>
        </div>
      ) }
    </Toolbar>
  </nav>
  )};



export default Navbar;