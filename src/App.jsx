import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Teachers from "./Pages/Teachers";
import Profile from "./Pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/userProfile" element={<Profile />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
