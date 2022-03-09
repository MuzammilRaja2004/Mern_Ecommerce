import React from "react";
import Slider from "./Catergory&Slider/Slider";
import Card from "./Cards/Card";
import SlickProducts from "./Cards/SlickProducts";
import Cardscategory from "./Cards/Cardscategory";
import Payment from "./PaymentIcons/Payment";
import Footer from "./footer/Footer";
import Navbar from './Navbar/Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
      <Slider />
      <Card />
      <SlickProducts />
      <Cardscategory />
      <Payment />
      <Footer />
    </>
  );
};

export default Home;
