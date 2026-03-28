import React from "react";
import NavBar from "../Navbar";
import Hero from "../Components/Hero";
import MarketFeatures from "../Components/MarketFeatures";
import { features, processFeatures, verification } from "../data";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import background2 from "../assets/background2.jpg";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero
        Image={background2}
        text="Campus Market Place,"
        text2="All In One Place"
        description="Elevate your university experience with a curated digital flagship. Effortlessly browse, buy, and sell exclusive campus gear, textbooks, and local services."
        primaryBtn="Shop Now"
        secondaryBtn="Start Selling"
      />
      <MarketFeatures
        text="Marketplace Features"
        description="Discover what makes our campus marketplace unique and effortless."
        items={features}
      />
      <MarketFeatures
        text="The Process"
        description="Simple, fast and secure marketplace integration."
        items={processFeatures}
      />
      <Cards items={verification} />

      <Footer />
    </>
  );
}

export default HomePage;