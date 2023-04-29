import React from "react";
import "../../styles/SignIn.css";
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
  }
  return (
    <div className="profile--wrapper">
      <form action="" className="form" onSubmit={signUp}>
        <h1 className="logIn--title">Sign Up</h1>
        <input
          className="logIn--email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="logIn--password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p className="haveAccount">Already have an account? <Link to={'/signIn'}>Log In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
