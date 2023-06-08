import React from "react";
import headerImg from "../../assets/car-header.png";
import "./Home.scss";
import { comp_images } from "../../utilities/ImageData.js";
import ProductCard from "../../components/ProductCard/ProductCard";
import { prod_images } from "../../utilities/ImageData";
import Benefits from "../../components/Benefits/Benefits";
import AboutUs from "../../components/AboutUs/AboutUs";

function Home() {
  const productData = [
    {
      model_Name: "Miracle",
      price: 60000,
      pImg: prod_images[0].pImg,
    },
    {
      model_Name: "Wynn",
      price: 75000,
      pImg: prod_images[4].pImg,
    },
    {
      model_Name: "Dex",
      price: 70000,
      pImg: prod_images[2].pImg,
    },
    {
      model_Name: "Dex GR",
      price: 75000,
      pImg: prod_images[3].pImg,
    },
  ];
  return (
    <>
      {/* //Hero Section */}

      <div className="Hero">
        <div class="container header-section flex items-center">
          <div class="header-left" data-aos="fade-right">
            <h1>Redefining Transportation</h1>
            <p>
              Join the EV movement today and experience the joy of driving while
              reducing your carbon footprint. Embrace the future of
              transportation with EVs.
            </p>
            <a href="#" className="primary-button">
              Explore More
            </a>
          </div>
          <div class="header-right" data-aos="fade-left">
            <img src={headerImg} alt="header-image" />
          </div>
        </div>
      </div>

      {/* Companies Section */}

      <div className="container companies-section">
        <p data-aos="flip-up">
          The world’s best companies rely on UnicusMobility for Eco-Friendly
          Transportation
        </p>
        <div className="slider" data-aos="fade-up">
          <div className="slide flex items-center">
            {comp_images.map((logo) => {
              return <img src={logo.cName} />;
            })}

            {comp_images.map((logo) => {
              return <img src={logo.cName} />;
            })}
          </div>
        </div>
      </div>

      {/* Product Section */}

      <div className="container Product-Card-Container">
        <div className="product-card-heading">
          <h1>Our Top Mobilities</h1>
          <p>
            Unleash the Power of Electric Mobility and Drive the Future Forward!
          </p>
        </div>
        <div
          className="product-wrapper flex justify-center items-center"
          data-aos="flip-left"
        >
          {productData.map((prod) => {
            return <ProductCard cardData={prod} />;
          })}
        </div>
      </div>

      {/* Benefit Section */}

      <div className="container benefit-section">
        <div className="benefit-heading">
          <h1> Why Electric Mobility ?</h1>
        </div>
        <Benefits />
      </div>

      {/* About Section */}

      <AboutUs />
    </>
  );
}

export default Home;
