import React from 'react';
import GoogleLogin from 'react-google-login'

const GoogleLoginBtn = () => {
    
    const handleSuccess = (resp) => {
        console.log(resp)
        console.log(resp.profileObj)
    }

    const handleFailure = (resp) => {
        console.log(resp)
    }
    
    return(
        <div>
            <GoogleLogin
                clientId=""
                buttonText="Login with Google"
                onSuccess={handleSuccess()}
                onFailure={handleFailure()}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GoogleLoginBtn