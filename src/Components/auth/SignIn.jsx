import React from "react";
import "../../styles/SignIn.css";
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userNotFound, setUserNotFound] = React.useState(false)
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential)
    }).catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/user-not-found") {
            setUserNotFound(prevState => !prevState)
        }
    })
  }

  React.useEffect(() => {
    setTimeout(() => {
        let elementExists = document.getElementById('errorMsg');
        if (elementExists) {
          const h3 = document.getElementById('errorMsg');
          h3.style.display = "none";
        }
      }, 3000);
  }, [userNotFound])

  return (
    <div className="profile--wrapper">
      <form action="" className="form" onSubmit={signIn}>
        <h1 className="logIn--title">Log In</h1>
        {userNotFound && <h3 className="logIn--error" id="errorMsg"><AiOutlineExclamationCircle/> Email not found</h3>}
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
        <button type="submit">Log In</button>
        <p className="haveAccount">Don't have an account? <Link to={'/signUp'}>Sign Up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;
