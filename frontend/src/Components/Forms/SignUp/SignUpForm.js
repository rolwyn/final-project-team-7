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


    // let emailRef = React.useRef<HTMLElement>(null)
    // let fullNameRef = React.useRef<HTMLElement>(null)
    // let userNameRef =  React.useRef<HTMLElement>(null)
    // let passwordRef = React.useRef<HTMLElement>(null)
    // ref={node => { emailRef = node }}

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

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    };

    const onChangeFirstName = (e) => {
        const firstName = e.target.value
        setFamilyname(firstName)
    };

    const onChangeLastName = (e) => {
        const lastName = e.target.value
        setEmail(lastName)
    };

    const onChangeValue = (e) => {
        let elementValue = e.target.value
        setEmail(elementValue)
    };

    return(
        <form ref={form => formElement = form} id="signup-form" className="add_signup_form" onSubmit={handleSignUpSubmit}>
            <fieldset className="column_fieldset">
                <label>Email</label>
                <input id="add-email"  name="emailid" type="text" className="_inputField" required onChange={onChangeEmail}></input>
            </fieldset>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <fieldset className="column_fieldset">
                    <label>First Name</label>
                    <input id="add-firstname" name="firstname" type="text" className="_inputField" required onChange={onChangeFirstName}></input>
                </fieldset>
                <fieldset className="column_fieldset">
                    <label>Last Name</label>
                    <input id="add-lastname" name="lastname" type="text" className="_inputField" required></input>
                </fieldset>
            </div>
            <fieldset className="column_fieldset">
                <label>Username</label>
                <input id="add-username" name="username" type="text" className="_inputField" required></input>
            </fieldset>
            <fieldset className="column_fieldset">
                <label>Password</label>
                <input id="add-password" name="title" className="_inputField" required></input>
            </fieldset>

            {/* <!-- submit button for creating a user --> */}
            <div className="btn_wrapper">
                <button id="create-user" type="submit">Sign Up</button>
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