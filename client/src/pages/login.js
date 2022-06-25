import React, { useState, useRef } from 'react';

function LoginSignup () {

  const [loginToggle, setloginToggle] = useState(false);
  const toggleElement = useRef();
  const toggleBtn = useRef();
  
  function handleToggle() {
    if(loginToggle === false) {
      toggleElement.current.classList.toggle('toggleElement1');
      toggleElement.current.classList.toggle('toggleElement2');
      toggleBtn.current.classList.toggle('toggleBtn1');
      toggleBtn.current.classList.toggle('toggleBtn2');
      setloginToggle(true);
      return;
    }
    if(loginToggle === true) {
      toggleElement.current.classList.toggle('toggleElement1');
      toggleElement.current.classList.toggle('toggleElement2');
      toggleBtn.current.classList.toggle('toggleBtn1');
      toggleBtn.current.classList.toggle('toggleBtn2');
      setloginToggle(false);
      return;
    }
    return;
  }

  return (
    <>
      <div className='bg-gray-100 w-full h-screen'>
        <div className='flex flex-wrap bg-white m-auto mt-5 rounded-xl relative w-5/6'>
          <div className='w-1/2 p-5'>
            <h1>Login</h1>
            <div>
              <p className='w-full text-start'>Email</p>
              <input type="text" placeholder="Enter Email" name="email" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <p className='w-full text-start'>Password</p>
              <input type="password" placeholder="Enter Password" name="password" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <button type="submit" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4'>Login</button>
            </div>
          </div>
          <div className='w-1/2 p-5'>
            <h1 className='font-bold text-xl'>Signup</h1>
            <div>
            <p className='w-full text-start'>Username</p>
              <input type="text" placeholder="Enter Username" name="uname" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <p className='w-full text-start'>Email</p>
              <input type="text" placeholder="Enter Email" name="eml" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <p className='w-full text-start'>Password</p>
              <input type="password" placeholder="Enter Password" name="psw" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <button type="submit" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4'>Sign Up</button>
            </div>
          </div>
          <div ref={toggleElement} className='toggleElement1 flex justify-around items-center bg-gray-700'>
            <button ref={toggleBtn} onClick={() =>handleToggle()} className='toggleBtn1 text-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2'>
              {loginToggle ? (<p>Click to Signup</p>):(<p>Click to Login</p>)}
              </button>
          </div>
      </div>
      </div>
    </>

  )
}

export default LoginSignup;