import React, { useState } from "react";
import {Link, Outlet } from "react-router-dom";

// User Login info
const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

function Register({props}){
    const [list, setList] = React.useState(database);
    const [userName, setUserName] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [errorMessages, setErrorMessages] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(props);

  function handleChangeUserName(event){
    setUserName(event.target.value);
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

    // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  function PasswordValidation(str){
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    // If the string is empty
    // then print No
    if (!str || str.length === 0) {
      document.write("No" + "<br>");
      return;
    }

    // Print Yes If the string matches
    // with the Regex
    if (pattern.test(str)) {
      // document.write("Yes" + "<br>");
      return true;
    } else {
      // document.write("No" + "<br>");
      return false;
    }
  }

  function handleChangePassword(event){
    setPassword(event.target.value);
  }

  function handleAdd() {
    if(PasswordValidation(Password)){
      const newList = list.concat({userName, Password});
      console.log(newList)

      setList(newList);
      setUserName('');
      setPassword('');
      setIsSubmitted(true);
    }
    else{
      setErrorMessages({ name: "pass", message: errors.pass });
    }
  }

  console.log(list);

  const renderForm = (
    <div className="form">
      <form onSubmit={handleAdd}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" value={userName} name="uname" onChange={handleChangeUserName} required />
          <br/>
          <br/>
          <label>Password</label>
          <input type="text" value={Password} name="pass" onChange={handleChangePassword} required />
          {renderErrorMessage("pass")}
          <br/>
          <button type="button" onClick={handleAdd}>submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
        {/* {isSubmitted ? <LandingPage/>: renderForm} */}
        {isSubmitted ? <div>User is successfully created</div>: renderForm}
      </div>

      <div>
        <div>
            <nav>
              <Link to = "/">Sign in</Link>
            </nav>
        </div>

          <Outlet/>
      </div>
    </div>
  );
}

export default Register
