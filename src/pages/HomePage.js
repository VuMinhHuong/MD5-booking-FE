import "./HomePage.css";
import { Link } from "react-router-dom";
import React from "react";
function HomePage(props) {
  return (
    <>
      <h1>Đây là trang HomePage</h1>
      <Link to="/loginPage">LoginPage</Link>
      <br></br>
      <Link to="/registerPage">RegisterPage</Link>
      <br></br>
      <Link to="/roomPage">Room Page</Link>
      <br></br>
      <Link to="/userPage">User Page</Link>
    </>
  );
}

export default HomePage;
