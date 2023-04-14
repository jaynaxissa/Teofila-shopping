import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import HeroSection from "../../components/HeroSection";
import "./home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <Header />

        <HeroSection />
        <div className="trending-banner">
          <p className="trending-word">TRENDING</p>
        </div>
        <div className="card-section">
          <Cards />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
