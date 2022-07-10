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

function Register(){
    const [list, setList] = React.useState(database);
    const [userName, setUserName] = React.useState('');
    const [Password, setPassword] = React.useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChangeUserName(event){
    setUserName(event.target.value);
  }

  function handleChangePassword(event){
    setPassword(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({userName, Password});
    console.log(newList)

    setList(newList);
    setUserName('');
    setPassword('');
    setIsSubmitted(true);
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