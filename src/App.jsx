import "./App.css";
import Header from "./Components/Header";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Teachers from "./Pages/Teachers";
import Profile from "./Pages/Profile";
import Teacher from "./Pages/Teacher";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import { TeachersContextProvider } from "./Context/TeachersContext";

function App() {
  return (
    <div class="container">
      <Header />
      <div className="content">
        <TeachersContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/userProfile" element={<Profile />} />
            <Route path="/teacher/:id" element={<Teacher />} />
          </Routes>
        </TeachersContextProvider>
      </div>

      <Footer />
    </div>
  );
}

export default App;
