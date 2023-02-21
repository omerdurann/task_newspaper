import React from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Slider } from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Card />
      <Footer />
    </div>
  );
};
export default Home;
