import "./Nav.scss";
import Input from "../Input/Input";
import MobileNav from "../MobileNav/MobileNav.jsx";
import React, { useState } from "react";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="nav">
        <div className="nav-top">
          <img src="/icons/whatsapp.svg" alt="" />
          <h2>303.393.8881</h2>
        </div>
        <div className="nav-bottom">
          <div className="nav-bottom-mobile-menu">
            <button onClick={toggleMenu}>
              <img src="/icons/menu.svg" alt="" />
            </button>
          </div>
          <div className="nav-bottom-items">
            <div className="nav-bottom-items-links">
              <a href="/engagement-rings">Engagement Rings</a>
              <a href="/wedding-bands">Wedding Bands</a>
              <a href="/diamonds">Diamonds</a>
              <a href="/jewelry">Jewelry</a>
              <a href="/">About</a>
            </div>
            <a href="/" className="logo-div">
              <img className="logo" src="/icons/logo.png" alt="" />
            </a>
          </div>
          <div className="nav-bottom-inputs">
            <Input inputType="navInput" />
            <div className="nav-bottom-inputs-icons">
              <img className="user-icon" src="/icons/user.svg" alt="" />
              <img src="/icons/heart.svg" alt="" />
              <div className="bag">
                <img src="/icons/bag.svg" alt="" />
                <p>(0)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileNav onClose={closeMenu} />}
    </>
  );
}

export default Nav;
