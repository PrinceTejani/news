import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";

export default class App extends Component {
  render() {
    return (
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={8}
                  country={"in"}
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={8}
                  country={"in"}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={8}
                  country={"in"}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={8}
                  country={"in"}
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={8}
                  country={"in"}
                  category="health"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={8}
                  country={"in"}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={8}
                  country={"in"}
                  category="technology"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={8}
                  country={"in"}
                  category="science"
                />
              }
            />
            <Route path="/user" element={<User />} />
            <Route path="/register" element={<User />} />
          </Routes>
        </Router>
      </div>
    );
  }
}