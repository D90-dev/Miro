import { useState } from "react";
import "./Footer.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

function App() {
  return (
    <>
      <div className="connect">
        <div className="connect-signup">
          <h3>Get Exclusive Offers and News</h3>
          <div className="connect-signup-inputs">
            <Input inputType="footerInput" placeholder="Enter email address" />
            <Button buttonType="darkBlue" buttonText="Sign Up" />
          </div>
        </div>
        <div className="connect-contact">
          <p>Connect</p>
          <div className="connect-contact-socials">
            <a href="">
              <img src="/icons/pinterest.svg" alt="" />
            </a>

            <a href="">
              <img src="/icons/instagram.svg" alt="" />
            </a>

            <a href="">
              <img src="/icons/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <img src="/icons/footer-logo.svg" alt="" />
        </div>
        <div className="footer-items">
          <div className="footer-item">
            <h2>Categories</h2>
            <a href="">Rings</a>
            <a href="">Necklaces</a>
            <a href="">Bracellets</a>
            <a href="">Earrings</a>
          </div>

          <div className="footer-item">
            <h2>Experience Miro Jewelers</h2>
            <a href="">Custom Design</a>
            <a href="">Jewelry Repair</a>
            <a href="">Current Promotions</a>
            <a href="">Determine Your Ring Size</a>
          </div>

          <div className="footer-item">
            <h2>About Us</h2>
            <a href="">Who We Are</a>
            <a href="">Lifetime Warranty</a>
            <a href="">Lifetime Free Upgrade</a>
            <a href="">Financing Options</a>
            <a href="">Free Shipping</a>
          </div>

          <div className="footer-item">
            <h2>Help</h2>
            <a href="">Contact Us</a>
            <a href="">Terms Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Return Policy</a>
          </div>

          <div className="footer-item">
            <h2>Visit Us</h2>
            <a href="">6750 S. Emporla St. Centennlal, Colorado 80112</a>
            <a href="">
              Regular Hours: Tue - Fri: 10 am - 6 pm Sat: 10 am - 5 pm{" "}
            </a>
            <a href="">303 732 8991</a>
            <a href="">info@mirojewelers.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023. All rights reserved.</p>
          <div className="footer-bottom-banks">
            <img src="/icons/visa.svg" alt="" />
            <img src="/icons/mastercard.svg" alt="" />
            <img src="/icons/paypal.svg" alt="" />
            <img src="/icons/american-express.svg" alt="" />
            <img src="/icons/discover.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
