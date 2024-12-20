import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5 form-signup">
              <h1 className="text-center sign-up-heading-for-mob">Sign up</h1>
              <input
                type="text"
                placeholder="Enter username"
                className="p-2 my-3"
                name="username"
              />
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 my-3"
                name="email"
              />
              <input
                type="password"
                placeholder="Enter password"
                className="p-2 my-3"
                name="password"
              />
              <button className="btn bg-danger signup-btn">Sign Up</button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <h1 className="text-center sign-up-heading">Sign up</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
