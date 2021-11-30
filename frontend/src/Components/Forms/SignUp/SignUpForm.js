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

    const [isSignIn, setIsSignin] = useState(true)
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
            const doSignUp = await signup(email, familyname, givenname, username, imageurl, password)
            console.log(doSignUp)
        }


    }

    // write login logic here
    const handleSignInSubmit = async (e) => {
        e.preventDefault()
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

    const authPageSwitch = () => {
        setIsSignin(!isSignIn)
        // formElement.current.reset();
        // hideError(this.userInput);
        // Clear all fields
        setEmail('')
        setFamilyname('')
        setGivenname('')
        setUsername('')
        setPassword('')
    }

    return(
        <div className="content_wrapper col-span-3 px-5 py-10">
            {/* Title */}
            <header className="content_title mb-5">
                <h2 className="text-4xl mb-2">{isSignIn ? 'Login': 'Create an account'} to get started</h2>
                <span className="text-sm">Find events you love, meet new people, build your connection. All this with just one click.
                    What are you waiting for? {isSignIn ? 'Join Now': 'Login'}</span>
            </header>
            {/* Form */}
            <div>
                <Form onSubmit={isSignIn ? handleSignInSubmit: handleSignUpSubmit} id="signup-form" ref={formElement} className="add_signup_form">
                    {!isSignIn ? <><fieldset className="column_fieldset">
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
                                validations={[required]}
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
                                validations={[required]}
                            />
                        </fieldset>
                    </div></>
                    : null    
                    }
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
                            validations={[required]}
                        />
                    </fieldset>
                    <fieldset className="column_fieldset">
                        <label>Password</label>
                        <Input
                            id="add-password"
                            type="password"
                            className="_inputField"
                            name="password"
                            value={password}
                            data-state="setPassword"
                            onChange={onChangeValue}
                            validations={[required]}
                        />
                    </fieldset>
                    {/* <!-- submit button for creating a user --> */}
                    <div className="btn_wrapper">
                        <button id="create-user" type="submit">{isSignIn ? 'Sign In': 'Sign Up'}</button>
                        <span className="_orSeparator mx-3">- OR -</span>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_CLIENT_ID}
                            className="googleLogin"
                            buttonText="Login with Google"
                            onSuccess={handleSuccess}
                            onFailure={handleFailure}
                            cookiePolicy='single_host_origin'
                        />
                    </div>
                    {isSignIn ? 
                        <div className="noAccount">
                            Dont have an account? <button type="button" onClick={authPageSwitch}>Sign Up</button>
                        </div>
                        :
                        <div className="noAccount">
                            Have an account? <button type="button" onClick={authPageSwitch}>Sign In</button>
                        </div>
                    }
                    
                    <CheckFieldsButton style={{ display: "none" }} ref={chkbuttonElement} /> 
                </Form>
            </div>
            {/* Copyrights */}
            <div></div>
        </div>
    )
}

export default SignUpForm