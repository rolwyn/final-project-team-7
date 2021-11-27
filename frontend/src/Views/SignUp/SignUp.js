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
                <div className="content_wrapper col-span-3 px-5 py-10">
                    {/* Title */}
                    <header className="content_title mb-5">
                        <h2 className="text-4xl mb-2">Create an account to get started</h2>
                        <span className="text-sm">Find events you love, meet new people, build your connection. All this with just one click. Join today or <a href="/login">Log in</a></span>
                    </header>
                    {/* Form */}
                    <div>
                        <SignUpForm></SignUpForm>
                    </div>
                    {/* Copyrights */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default SignUp