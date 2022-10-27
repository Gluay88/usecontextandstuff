import React, { createContext, useContext } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import "./App.css";
import { UserContext } from "./UserContext";

function App() {
  const value = useContext(UserContext);
  return (
    <>
      <Router>
        <Nav />
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
