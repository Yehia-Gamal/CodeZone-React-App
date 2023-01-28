import { useState } from "react";
import Guest from "./Guest";
import LoggedIn from "./Logged";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // let element;
  // if (isLoggedIn) {
  //   element = <h1>Hello Eng Yehia, I'm LoggedIn</h1>
  // } else {
  //   element = <h1>Hello Guest, I'm Not LoggedIn</h1>
  // }

  // let element = isLoggedIn ? <h1>Hello Eng Yehia, I'm LoggedIn</h1> : <h1>Hello Guest, I'm Not LoggedIn</h1>

  const LoginButton = () => {
    return (
      <button className="btn btn-primary m-2" onClick={() => {
        setIsLoggedIn(true)
      }}>Login</button>
    )
  }

  const LogoutButton = () => {
    return (
      <button className="btn btn-primary m-2" onClick={() => {
        setIsLoggedIn(false)
      }}>Logout</button>
    )
  }

  // let button = isLoggedIn ? <LogoutButton onClick={LogoutButton} /> : <LoginButton onClick={LoginButton} />;
  let button = isLoggedIn ? <LogoutButton /> : <LoginButton />;

  return (
    <div className="login w-100 d-flex justify-content-between align-items-center">
      {/* {element} */}
      <div>
        {isLoggedIn ? <LoggedIn name="Yehia" /> : <Guest />}
      </div>
      {button}
    </div>
  )
}

export default Login;