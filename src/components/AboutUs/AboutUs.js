import React from "react";
import "./AboutUs.scss";
import office from "../../assets/office3.png";

function AboutUs() {
  return (
    <div className="About">
      <div className="container about-container">
        <div className="about-heading">
          <h1>About Us</h1>
        </div>

        <div className="about-body">
          <div className="about-img" data-aos="fade-right">
            <img src={office} alt="office" />
          </div>

          <div className="about-details" data-aos="fade-left">
            <p>
              Unicus Mobility is a startup venture that intends to improve
              people's access to efficient, eco-friendly, and technologically
              advanced mobility solutions. We are on a mission to revolutionise
              the world of transportation with cutting-edge electric vehicles
              that blend brains, brawn, and sustainability. Inspired by the
              sight of frantic delivery fleets zipping through gridlocked
              streets on fossil-fueled bikes, we knew there had to be a better
              way. Further, we observed the hassles involved in the daily
              commute that are faced by students and urban professionals. And
              so, we set out to manufacture e-bikes that would not only ease the
              daily commute for all of them but would also be kind to the
              environment and their wallets.
              <p style={{ marginTop: "10px" }}>
                The founding team has creative thinkers and innovators who are
                ardent believers that ideas without execution are just
                hallucinations. What truly distinguishes the sheeps from goats
                is the way in which they put their ideas into action. The
                enthusiastic engineers, designers, marketers, and operators that
                make up our team know everything there is to know about the EV
                business.
              </p>
              <p style={{ marginTop: "10px" }}>
                The founding team has creative thinkers and innovators who are
                ardent believers that ideas without execution are just
                hallucinations.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
