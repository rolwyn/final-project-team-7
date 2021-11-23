import React, { Component } from 'react';

import './App.scss';

export class App extends Component {
    render() {
        return(
            <div className="container">
                <div className="container_wrapper">
                    <div>
                        <img alt="brandImg"></img>
                    </div>
                    <div>
                        {/* Title */}
                        <div>
                            <h2>Create an account to get started</h2>
                            <span>Find events you love, meet new people, build your connection. All this with just one click. Join today or <a href="/login">Log in</a></span>
                        </div>
                        {/* Form */}
                        <div>
                            <form ref={form => this.formElement = form} id="add-todo-form" className="add-todo-form">
                                <fieldset className="column-fieldset">
                                    <label>Email</label>
                                    <input id="add-email" ref={(ref) => {this.emaild = ref}} name="emailid" type="text" className="add-title _inputField" placeholder="Your task Sir?" required></input>
                                </fieldset>
                                <fieldset className="column-fieldset">
                                    <label>Full Name</label>
                                    <input id="add-fullName" ref={(ref) => {this.fullName = ref}} name="fullname" type="text" className="add-title _inputField" placeholder="Your full name?" required></input>
                                </fieldset>
                                <fieldset className="column-fieldset">
                                    <label>Username</label>
                                    <input id="add-username" defaultValue={this.props.todoId === null ? null: this.props.todoId} ref={(ref) => {this.title = ref}} name="username" type="text" className="add-title _inputField" required></input>
                                </fieldset>
                                <fieldset className="column-fieldset">
                                    <label>Password</label>
                                    <input id="add-password" type="password" ref={(ref) => {this.title = ref}} name="title" className="add-title _inputField" required></input>
                                </fieldset>
                                
                                
                                {/* <!-- submit button for creating a user --> */}
                                <div className="btn-wrapper">
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