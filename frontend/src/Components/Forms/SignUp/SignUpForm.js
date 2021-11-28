import React from 'react';
import './SignUpForm.scss';
import GoogleLogin from 'react-google-login'

function SignUpForm() {
    let emailRef = React.useRef<HTMLElement>(null)
    let fullNameRef = React.useRef<HTMLElement>(null)
    let userNameRef =  React.useRef<HTMLElement>(null)
    let passwordRef = React.useRef<HTMLElement>(null)
    let formElement =  React.useRef<HTMLFormElement>(null)
    

    const handleSuccess = (resp) => {
        console.log(resp)
        console.log(resp?.profileObj)
    }

    const handleFailure = (error) => {
        console.log(error)
    }

    return(
        <form ref={form => formElement = form} id="signup-form" className="add_signup_form">
            <fieldset className="column_fieldset">
                <label>Email</label>
                <input id="add-email" ref={node => { emailRef = node }} name="emailid" type="text" className="_inputField" required></input>
            </fieldset>
            <fieldset className="column_fieldset">
                <label>Full Name</label>
                <input id="add-fullName" ref={(ref) => {fullNameRef = ref}} name="fullname" type="text" className="_inputField" required></input>
            </fieldset>
            <fieldset className="column_fieldset">
                <label>Username</label>
                <input id="add-username" ref={(ref) => {userNameRef = ref}} name="username" type="text" className="_inputField" required></input>
            </fieldset>
            <fieldset className="column_fieldset">
                <label>Password</label>
                <input id="add-password" type="password" ref={(ref) => {passwordRef = ref}} name="title" className="_inputField" required></input>
            </fieldset>

            {/* <!-- submit button for creating a user --> */}
            <div className="btn_wrapper">
                <button id="create-user" type="submit">Sign Up</button>
                <GoogleLogin
                    clientId="168488668480-hmla08j8tjo5dfq1571gfil3r0n36qig.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy='single_host_origin'
                />
            </div>
        </form>      
    )
}

export default SignUpForm