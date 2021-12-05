import React from 'react';
import './Footer.scss'
export default function Footer(){
    return(
        <footer>
            <div className="wrapper"><a className="logo" href="//www.northeastern.edu"></a> 
                <ul className="info">
                    <li><a href="//my.northeastern.edu" onClick="that=this;_gaq.push(['_trackEvent','outbound','click',that.href]);setTimeout(function() { location.href=that.href }, 200);return false;">MyNEU</a></li>
                    <li><a href="http://www.northeastern.edu/findfacultystaff" onClick="that=this;_gaq.push(['_trackEvent','outbound','click',that.href]);setTimeout(function() { location.href=that.href }, 200);return false;">Find Faculty &amp; Staff</a></li>
                    <li><a href="http://www.northeastern.edu/neuhome/adminlinks/findaz.html" onClick="that=this;_gaq.push(['_trackEvent','outbound','click',that.href]);setTimeout(function() { location.href=that.href }, 200);return false;">Find A-Z</a></li>
                    <li><a href="http://www.northeastern.edu/emergency/index.html" onClick="that=this;_gaq.push(['_trackEvent','outbound','click',that.href]);setTimeout(function() { location.href=that.href }, 200);return false;">Emergency Information</a></li>
                    <li><a href="http://assistive.usablenet.com/tt/http://www.northeastern.edu/index.html" onClick="that=this;_gaq.push(['_trackEvent','outbound','click',that.href]);setTimeout(function() { location.href=that.href }, 200);return false;">Text Only</a></li>
                    <li><a href="http://www.northeastern.edu/privacy/index.html" onClick="that=this;_gaq.push(['_trackEvent','outbound','click',that.href]);setTimeout(function() { location.href=that.href }, 200);return false;">Privacy</a></li>
                </ul>
                <p className="copyright">360 Huntington Ave., Boston, Massachusetts 02115 &#183; 617.373.2000 &#183; TTY 617.373.3768<br/>
                &#169; <span class="the-year">2021</span> Northeastern University</p>
            </div>
        </footer>
    
    

    );
}


