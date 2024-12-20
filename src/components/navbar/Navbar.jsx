import React from "react";
import './navbar.css';
import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Navbar = () => {

  const {isLogin} = useGlobalContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand text-danger todo" href="#">
            <b><FaBook />&nbsp;todo</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ul-div" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 my-2">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link className="nav-link active" aria-current="page" to={'/aboutus'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link className="nav-link active" aria-current="page" to={'/todo'}>
                  Create todo
                </Link>
              </li>
              {
                !isLogin && 
                <li className="nav-item mx-2 my-2 btn-nav">
                <Link className="btn btn-danger me-2"  role="button" to={'/signup'}>
                  SignUp
                </Link>
              </li>
              }
              {
                !isLogin &&
                <li className="nav-item mx-2 my-2 btn-nav">
              <Link className="btn btn-danger me-2"  role="button" to={'/signin'}>
                  SignIn
                </Link>
              </li>
              }
              
              {isLogin &&
                <li className="nav-item mx-2 my-2 btn-nav">
                <Link className="btn btn-danger me-2"  role="button">
                    Log Out
                  </Link>
                </li>
              }
              {
                isLogin &&
                <li className="nav-item mx-2 my-0">
                <Link className="nav-link active" aria-current="page" >
                  <img className="image-fluid user-png" src="/user.png" alt="" />
                </Link>
              </li>
              }
              
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
