import React from "react";
import Banner from "./Banner";
import Services from "../components/Services";
import PopularProducts from "../components/PopularProducts ";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <PopularProducts />
    </div>
  );
};

export default Home;
