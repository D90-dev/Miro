import React from "react";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
