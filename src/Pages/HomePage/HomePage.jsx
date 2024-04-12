import Button from "../../Components/Button/Button";
import React from "react";
import "./HomePage.scss";
import HomePageComponents from "../../Components/HomePageComponents/HomePageComponents";



function HomePage() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-first">
          <h2>Made for Modern Love</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="home-header-first-btn">
            <Button buttonType="darkBlueDefault" buttonText="See Catalog" />
          </div>
        </div>
        <div className="home-header-second">
          <img src="/images/home-header-ring.svg" alt="" />
        </div>
      </div>
      <HomePageComponents />
    </div>
  );
}

export default HomePage;
