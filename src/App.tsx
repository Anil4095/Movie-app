import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import { firebaseAuth, firebaseProvider } from "./Firebase.js";
import Navbar from "./screens/Navbar/Navbar";
import Animelist from "./screens/Home/Animelist";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginWithGoogle = () => {
    firebaseAuth
      .signInWithPopup(firebaseProvider)
      .then((result) => {
        const user = result.user;
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false);
      });
  };
  useEffect(() => {
    loginWithGoogle();
  }, []);
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Animelist" element={<Animelist />} />
          </Routes>
        </>
      ) : null}
    </div>
  );
}

export default App;
