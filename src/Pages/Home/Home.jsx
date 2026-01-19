import React from "react";
import Navbar from "../Navigation/Navigation";
import "./Home.css";
import ScrollDown from "../../Functions/ScrollDown/ScrollDown";
import heroImage from "/Hero/hero.png";

const Home = () => {
  return (
    <>
      <Navbar floating />

      <section className="hero">
        <div className="hero-content">
          <img src={heroImage} alt="Hero" />
              {/* <h1>Welcome to GRM Solar Solutions</h1> */}
          
          </div>
          <ScrollDown/>
      </section>
    </>
  );
};

export default Home;
