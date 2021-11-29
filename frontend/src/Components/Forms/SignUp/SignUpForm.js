import React, {useState} from 'react';
import './SignUpForm.scss';
import GoogleLogin from 'react-google-login'
import { signup } from '../../../Api/index.js'

function SignUpForm() {

    const [email, setEmail] = useState("")
    const [familyname, setFamilyname] = useState("")
    const [givenname, setGivenname] = useState("")
    const [username, setUsername] = useState("")
    const [imageurl, setImageurl] = useState("")
    const [password, setPassword] = useState("")


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

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
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
                <button id="create-user" type="submit" onClick={handleSignUpSubmit}>Sign Up</button>
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
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