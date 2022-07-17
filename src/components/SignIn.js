import React, { useState } from "react";
import {Link, Outlet, Navigate } from "react-router-dom";
import bcrypt from 'bcryptjs'
import database from "../database";

const salt = bcrypt.genSaltSync(10);


function SignIn({prop}){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //console.log(prop);

  // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   },
  //   {
  //     username: "user3",
  //     password: "$2a$10$CwTycUXWue0Thq9StjUM0uTTJ.hK8Gm64G/uDVUpo5tiBsrUvq5sO"
  //   }
  // ];

  console.log(database)

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    
    const userData = database.find((user) => user.username === uname.value);
    var inputHashedPassword = bcrypt.hashSync(pass.value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
    // console.log(inputHashedPassword);
    // console.log(pass.value);
    // console.log(userData.password)

    // Compare user info
    if (userData) {
      // if (userData.password !== pass.value) {
      if (userData.password !== inputHashedPassword) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Create your free account</h3>
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" class="form-control" id="name" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" class="form-control" id="password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input  class="btn btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>

        <div>
          <nav>
          {/* <h6 class="right">Don't have an account? &nbsp;&nbsp;</h6> */}
          {/* <h6 class="right">Don't have an account? </h6> */}
            <Link to = "/Register/">Register</Link>
          </nav>
        </div>

        <Outlet/>
        
        {isSubmitted ? <Navigate replace to = "/LandingPage/" />: renderForm}
        {/* {isSubmitted ? <div>User is successfully logged in</div>: renderForm} */}

        <h6 class="spacin">By signing up you agree to our communication and usage terms</h6>

        
      </div>
    </div>
  );
}

export default SignIn;