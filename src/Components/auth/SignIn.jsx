import React from "react";
import "../../styles/SignIn.css";
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Profile from "../../Pages/Profile";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userNotFound, setUserNotFound] = React.useState(false)
  const [userWrongPassword, setUserWrongPassword] = React.useState(false)
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false)
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        console.log("Succesfully signed in as " + userCredential.user.email)
        setIsUserSignedIn(prevState => !prevState)
      }).catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/user-not-found":
            setUserNotFound(prevState => !prevState)
            break;
          case "auth/wrong-password":
            setUserWrongPassword(prevState => !prevState)
        }
        // if (errorCode == "auth/user-not-found") {
        //     setUserNotFound(prevState => !prevState)
        // }
        console.log(error)
      })
  }

  React.useEffect(() => {
    setTimeout(() => {
      let elementExists = document.getElementById('errorMsg');
      if (elementExists) {
        const h3 = document.getElementById('errorMsg');
        h3.style.display = "none";
      }
    }, 4000);
  }, [userNotFound, userWrongPassword])

  return (
    <>
      {isUserSignedIn ?
        <Profile userEmail={email} userPassword={password} setIsUserSignedIn={setIsUserSignedIn} />
        : <div className="profile--wrapper">
          <form action="" className="form" onSubmit={signIn}>
            <h1 className="logIn--title">Log In</h1>
            {userNotFound && <h3 className="logIn--error" id="errorMsg"><AiOutlineExclamationCircle /> Email not found</h3>}
            {userWrongPassword && <h3 className="logIn--error" id="errorMsg"><AiOutlineExclamationCircle /> Wrong password</h3>}
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
      }
    </>
  );
}

export default SignIn;
