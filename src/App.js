
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import LogIn from "./components/signin/LogIn";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/aboutus" element={<About />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<LogIn />}/>
          <Route path="/todo" element={<Todo />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
