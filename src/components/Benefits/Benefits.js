import React from "react";
import "./Benefits.scss";
import ecoF from "../../assets/ecoF.jpg";
import costSaving from "../../assets/costSaving.jpg";
import experience from "../../assets/experience.jpg";

function Benefits() {
  return (
    <>
      <div className="benefit-container flex">
        <div className="benefit-img" data-aos="fade-right">
          <img src={ecoF} alt="eco-friendly" />
        </div>

        <div className="benefit-details flex" data-aos="fade-left">
          <h2>Eco-Friendly</h2>
          <p>
            EVs produce zero tailpipe emissions, reducing air pollution and
            greenhouse gas emissions. They play a crucial role in combating
            climate change and improving air quality, especially when charged
            with renewable energy sources.
          </p>
        </div>
      </div>

      <div className="benefit-container flex">
        <div className="benefit-details second flex" data-aos="fade-left">
          <h2>Cost Saving</h2>
          <p>
            EVs offer long-term cost savings. Charging an EV is generally
            cheaper than refueling a gasoline or diesel vehicle, resulting in
            lower fuel costs. Additionally, EVs have fewer moving parts and
            require less maintenance, saving on maintenance and repair expenses
            over time.
          </p>
        </div>

        <div className="benefit-img second" data-aos="fade-right">
          <img src={costSaving} alt="cost-saving" />
        </div>
      </div>

      <div className="benefit-container flex">
        <div className="benefit-img third" data-aos="fade-right">
          <img src={experience} alt="experience" />
        </div>

        <div className="benefit-details flex" data-aos="fade-left">
          <h2>Technology</h2>
          <p>
            EVs are at the forefront of technological advancements in the
            automotive industry. They come equipped with innovative features
            such as regenerative braking, smart connectivity, and advanced
            driver assistance systems, enhancing safety and convenience.
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
