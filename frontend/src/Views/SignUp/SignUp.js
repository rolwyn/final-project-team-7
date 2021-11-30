import React from 'react';
import SignUpForm from '../../Components/Forms/SignUp/SignUpForm';
import './SignUp.scss';

function SignUp() {
    return(
        <div className="container">
            <div className="container_wrapper grid grid-cols-1 lg:grid-cols-4">
                <div className="branding_wrapper col-span-1">
                    <img className="brand_img" alt="brandImg" src="assets/images/EventLogo.png"></img>
                </div>
                <SignUpForm></SignUpForm>
            </div>
        </div>
    )
}

export default SignUp