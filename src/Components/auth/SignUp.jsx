import React from "react";
import "../../styles/SignIn.css";
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isInvalidEmail, setIsInvalidEmail] = React.useState(false);
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Succesfully signed up!")
        navigate('/signIn')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        switch (errorCode) {
          case "auth/invalid-email":
            setIsInvalidEmail(prevState => !prevState)
            break;
        
          default:
            console.log("Unexpected Error")
            break;
        }
    })
  }

  React.useEffect(() => {
    setTimeout(() => {
      let elementExists = document.getElementById('errorMsg');
      if (elementExists) {
        const h3 = document.getElementById('errorMsg');
        h3.style.display = "none";
      } else {
        console.log("element does not exist")
      }
    }, 4000);
  }, [isInvalidEmail])

  return (
    <div className="profile--wrapper">
      <form action="" className="form" onSubmit={signUp}>
        <h1 className="logIn--title">Sign Up</h1>
        {isInvalidEmail && <h3 className="logIn--error" id="errorMsg"><AiOutlineExclamationCircle /> Invalid Email</h3>}
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
