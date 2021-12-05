import React from 'react';
import './Footer.scss'
export default function Footer(){
    return(
        <footer>
            <div className="wrapper"><a className="logo" href="//www.northeastern.edu"></a> 
                <ul className="info">
                    <li><a href="//my.northeastern.edu" >MyNEU</a></li>
                    <li><a href="http://www.northeastern.edu/findfacultystaff" >Find Faculty &amp; Staff</a></li>
                    <li><a href="http://www.northeastern.edu/neuhome/adminlinks/findaz.html" >Find A-Z</a></li>
                    <li><a href="http://www.northeastern.edu/emergency/index.html" >Emergency Information</a></li>
                    <li><a href="http://assistive.usablenet.com/tt/http://www.northeastern.edu/index.html" >Text Only</a></li>
                    <li><a href="http://www.northeastern.edu/privacy/index.html" >Privacy</a></li>
                </ul>
                <div className="copyright">
                    <p>&#169; <span>2017</span> Northeastern University </p>
                    <p>360 Huntington Ave., Boston, Massachusetts 02115 &#183; 617.373.2000 &#183; TTY 617.373.3768 </p>
                </div>
            </div>
        </footer>
    
    

    );
}


