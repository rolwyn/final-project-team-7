import React, { Component } from 'react';

import './App.scss';

export class App extends Component {
    render() {
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
                            <form ref={form => this.formElement = form} id="signup-form" className="add_signup_form">
                                <fieldset className="column_fieldset">
                                    <label>Email</label>
                                    <input id="add-email" ref={(ref) => {this.emaild = ref}} name="emailid" type="text" className="_inputField" required></input>
                                </fieldset>
                                <fieldset className="column_fieldset">
                                    <label>Full Name</label>
                                    <input id="add-fullName" ref={(ref) => {this.fullName = ref}} name="fullname" type="text" className="_inputField" required></input>
                                </fieldset>
                                <fieldset className="column_fieldset">
                                    <label>Username</label>
                                    <input id="add-username" ref={(ref) => {this.title = ref}} name="username" type="text" className="_inputField" required></input>
                                </fieldset>
                                <fieldset className="column_fieldset">
                                    <label>Password</label>
                                    <input id="add-password" type="password" ref={(ref) => {this.title = ref}} name="title" className="_inputField" required></input>
                                </fieldset>

                                {/* <!-- submit button for creating a user --> */}
                                <div className="btn_wrapper">
                                    <button id="create-user" type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        {/* Copyrights */}
                        <div></div>
                    </div>
                </div>
            </div>
        )
    } 
}