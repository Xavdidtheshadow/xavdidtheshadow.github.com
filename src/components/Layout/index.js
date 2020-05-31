import React from "react";

import Navbar from "../Navbar";
import LeftBorder from "../LeftBorder";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LeftBorder />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
