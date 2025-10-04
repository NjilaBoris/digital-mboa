import React from "react";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import Introduction from "./sections/Introduction";
import Integrations from "./sections/Integrations";
import Faqs from "./sections/Faqs";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <LogoTicker />
      <Introduction />
      <Integrations />
      <Faqs />
    </div>
  );
};

export default Home;
