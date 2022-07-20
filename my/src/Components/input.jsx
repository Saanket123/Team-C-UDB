import React from "react";

function Input(){
    return <div className="col-lg-6 left-spacing">
    <h6 className="right">Don't have an account? &nbsp;&nbsp;
      <button className="btn btn-primary"> Log In </button>
    </h6>
    <div className="centre-align">
      <h3>Create your free account</h3>
      <p>Email address : </p><input type="email" name="Email address" class="form-control" id="emial" />
      <p>Password : </p><input type="password" name="Password" class="form-control" id="password" />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button">Create your account</button>
        <h6 className="mid-align">OR</h6>
        <button type="button" class="btn btn-outline-primary "><i
          className="fa-brands fa-google"></i>&nbsp;&nbsp;Sign with Google</button>
      </div>

      <h6 className="spacin">By signing up you agree to our communication and usage terms. Already have an
        account <a className="non" href=" ">Sign
          In</a></h6>
    </div>

  </div>
}

export default Input ;