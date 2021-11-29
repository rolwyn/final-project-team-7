import React, {useState} from 'react';
import './SignUpForm.scss';
import GoogleLogin from 'react-google-login'
import { signup } from '../../../Api/index.js'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckFieldsButton from "react-validation/build/button";

import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
        return (
            <div className="text-red-500 text-sm italic mt-2">
                This field is required!
            </div>
        );
    }
};

function SignUpForm() {

    const [isSignIn, setIsSignin] = useState(false)
    const [email, setEmail] = useState("")
    const [familyname, setFamilyname] = useState("")
    const [givenname, setGivenname] = useState("")
    const [username, setUsername] = useState("")
    const [imageurl, setImageurl] = useState("dummy")
    const [password, setPassword] = useState("")

    const formElement = React.useRef()
    let chkbuttonElement = React.useRef();


    const handleSuccess = (resp) => {
        console.log(resp)
        console.log(resp?.profileObj)
    }

    const handleFailure = (error) => {
        console.log(error)
    }

    const handleSignUpSubmit = async (e) => {
        e.preventDefault()

        formElement.current.validateAll()

        if (chkbuttonElement.current.context._errors.length === 0) {
            console.log(email)
        }

        // const doSignUp = await signup(email, familyname, givenname, username, imageurl, password)

        const resp = await signup(email, familyname, givenname, username, imageurl, password)
        console.log(resp)

    }

    const onChangeValue = (e) => {
        let elementValue = e.target.value
        // setEmail(elementValue)
        switch (e.target.dataset.state) {
            case 'setEmail':
                setEmail(elementValue)
                break
            case 'setFamilyname':
                setFamilyname(elementValue)
                break
            case 'setGivenname':
                setGivenname(elementValue)
                break
            case 'setUsername':
                setUsername(elementValue)
                break
            case 'setPassword':
                setPassword(elementValue)
                break
            default:
                return null
        }
    };

    return(     
        <Form onSubmit={handleSignUpSubmit} id="signup-form" ref={formElement} className="add_signup_form">
            <fieldset className="column_fieldset">
                <label>Email</label>
                <Input
                    id="add-email"
                    type="text"
                    className="_inputField"
                    name="emailid"
                    value={email}
                    data-state="setEmail"
                    onChange={onChangeValue}
                    validations={[required]}
                />
            </fieldset>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">        
                <fieldset className="column_fieldset">
                    <label>First Name</label>
                    <Input
                        id="add-firstname"
                        type="text"
                        className="_inputField"
                        name="firstname"
                        value={givenname}
                        data-state="setGivenname"
                        onChange={onChangeValue}
                    />
                </fieldset>
                <fieldset className="column_fieldset">
                    <label>Last Name</label>
                    <Input
                        id="add-lastname"
                        type="text"
                        className="_inputField"
                        name="lastname"
                        value={familyname}
                        data-state="setFamilyname"
                        onChange={onChangeValue}
                    />
                </fieldset>
            </div>
            <fieldset className="column_fieldset">
                <label>Username</label>
                <Input
                    id="add-username"
                    type="text"
                    className="_inputField"
                    name="username"
                    value={username}
                    data-state="setUsername"
                    onChange={onChangeValue}
                />
            </fieldset>
            <fieldset className="column_fieldset">
                <label>Password</label>
                <Input
                    id="add-password"
                    type="password"
                    className="_inputField"
                    name="emailid"
                    value={password}
                    data-state="setPassword"
                    onChange={onChangeValue}
                />
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
            <CheckFieldsButton style={{ display: "none" }} ref={chkbuttonElement} /> 
        </Form>
    )
}

export default SignUpForm