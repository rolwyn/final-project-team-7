import React from 'react';
import GoogleLogin from 'react-google-login'

const GoogleLoginBtn = () => {
    
    const handleSuccess = (response) => {
        console.log(response)
        // console.log(resp.profileObj)
    }

    const handleFailure = (response) => {
        console.log(response)
    }
    
    return(
        <div>
            <GoogleLogin
                clientId="168488668480-hmla08j8tjo5dfq1571gfil3r0n36qig.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleSuccess()}
                onFailure={handleFailure()}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GoogleLoginBtn