import React, { useState } from "react";
import "./signup.scss";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [error, setError] = useState({});
  const validForm = () => {
    let errors = {};
    let isValid = true;
    if (userInfo.name === "") {
      errors.name = "*Name is required";
       isValid = true;
    }
    if (userInfo.email === "") {
      errors.email = "*Email is required";
      isValid = false;
    }
    if (userInfo.password === "") {
      errors.password = "*Password is required";
      isValid = false;
    }
    setError(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const submit = () => {
    if (validForm()) {
      const userList = JSON.parse(localStorage.getItem("user")) || [];
      userList.push(userInfo);
      localStorage.setItem("user", JSON.stringify(userList));
      navigate("/");
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-box">
        <div className="signup-title">Sign Up</div>
        <div className="signup-properties">
          <div>
            <label>Name {error.name}</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label>E-Mail {error.email} </label>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              placeholder="Enter your E-Mail"
            />
          </div>
          <div>
            <label>Password {error.password}</label>
            <input
              type="text"
              onChange={handleChange}
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
