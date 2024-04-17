import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com"></Link>
        <Link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <div className="navbar">
          <Link href="/" className="title">
            News APP
          </Link>
          <Link to="/general">General News</Link>
          <div className="dropdown">
            <Link to="/" className="menu">
              News Categories &nbsp;
              <i class="fa-solid fa-caret-down"></i>
            </Link>
            <div className="dropdown-content">
              <Link to="/business">Business</Link>
              <Link to="/entertainment">Entertainment</Link>
              <Link to="/health">Health</Link>
              <Link to="/sports">Sports</Link>
              <Link to="/technology">Technology</Link>
              <Link to="/science">Science</Link>
            </div>
          </div>
          <div className="user-auth">
            <Link to="/user" className="user-link">
            <i class="fa-solid fa-circle-user fa-beat-fade"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
