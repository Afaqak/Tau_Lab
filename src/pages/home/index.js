import React from "react";
import Header from "../../components/header";
import AboutUs from "../../components/about us/aboutUs";
import Banner from "../../components/banner";
import Innovate from "../../components/innovate";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Header />
      <AboutUs />
      <Banner />
      <Innovate />
      <Footer />
    </div>
  );
};

export default Home;
