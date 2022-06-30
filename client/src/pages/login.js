import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function LoginSignup() {
  //handles the animations of the Login/Signup Page line 8 - 32
  const [loginToggle, setloginToggle] = useState(false);
  const toggleElement = useRef();
  const toggleBtn = useRef();

  function handleToggle() {
    if (loginToggle === false) {
      toggleElement.current.classList.toggle("toggleElement1");
      toggleElement.current.classList.toggle("toggleElement2");
      toggleBtn.current.classList.toggle("toggleBtn1");
      toggleBtn.current.classList.toggle("toggleBtn2");
      setloginToggle(true);
      return;
    }
    if (loginToggle === true) {
      toggleElement.current.classList.toggle("toggleElement1");
      toggleElement.current.classList.toggle("toggleElement2");
      toggleBtn.current.classList.toggle("toggleBtn1");
      toggleBtn.current.classList.toggle("toggleBtn2");
      setloginToggle(false);
      return;
    }
    return;
  }

  // Handles Login Functionality line 33 - 55
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN);

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: loginFormState.email,
          password: loginFormState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  //Handles Signup Functionality line 57 - 82
  const [signupFormState, setSignupFormState] = useState({
    uname: "",
    eml: "",
    psw: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        userName: signupFormState.uname,
        email: signupFormState.eml,
        password: signupFormState.psw,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupFormState({
      ...signupFormState,
      [name]: value,
    });
    console.log(signupFormState);
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="flex flex-wrap bg-opacity-0 m-auto mt-5 rounded-xl relative w-5/6 login-card">
          <div className="w-1/2 p-5 rounded-xl">
            <h1 className="font-bold text-xl">LOGIN</h1>
            <div>
              <p className="w-full text-start">Email</p>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                className="w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                id="email"
                onChange={handleLoginChange}
              />

              <p className="w-full text-start">Password</p>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                id="pwd"
                onChange={handleLoginChange}
              />

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                onClick={handleLoginFormSubmit}
              >
                Login
              </button>
            </div>
          </div>
          <div className="w-1/2 p-5">
            <h1 className="font-bold text-xl">SIGNUP</h1>
            <div>
              <p className="w-full text-start">Username</p>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                className="w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                onChange={handleSignupChange}
              />

              <p className="w-full text-start">Email</p>
              <input
                type="text"
                placeholder="Enter Email"
                name="eml"
                className="w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                onChange={handleSignupChange}
              />

              <p className="w-full text-start">Password</p>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                className="w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                onChange={handleSignupChange}
              />

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                onClick={handleSignupFormSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div
            ref={toggleElement}
            className="toggleElement1 flex justify-around items-center bg-gray-700 rounded-xl"
          >
            <button
              ref={toggleBtn}
              onClick={() => handleToggle()}
              className="toggleBtn1 text-center text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2"
            >
              {loginToggle ? <p>Click to Signup</p> : <p>Click to Login</p>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
