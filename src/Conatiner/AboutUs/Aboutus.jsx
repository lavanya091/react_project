import React from "react";
import CHEF_COOK from './CHEF_COOK.png'
import spoon from "./spoon.png";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="app_aboutus">
      <div className="app_aboutus_overlay">
        <img src={CHEF_COOK} alt="knife" />
      </div>
      <div className="app_aboutus_content">
        <div className="app_aboutus_content_about">
          <h1 className="headtext_cormorant">About us</h1>
          <img src={spoon} alt="about_spoon" className="spoon_img" />
          <p  className="p__opensans">Welcome to Epicurean Delights, where culinary excellence meets a warm and inviting atmosphere. Our passion for food is reflected in every dish we serve, crafted with the finest ingredients and a touch of love. Whether you're here for a quick lunch or a leisurely dinner, we aim to provide a memorable dining experience that tantalizes your taste buds and leaves you longing for more.</p>
          <button type="button" className="custom_button">
            Know More
          </button>
        </div>
        <div className="app_aboutus_content_history">
          <h1 className="headtext_cormorant">Our history</h1>
          <img src={spoon} alt="spoon" className="spoon_img" />
          <p  className="p__opensans">Epicurean Delights was founded in 2010 by James Anderson, a passionate chef with a dream to bring authentic gourmet cuisine to the heart of our city. What started as a small family-owned eatery has grown into a beloved local institution, renowned for its dedication to quality and community. Over the years, we've stayed true to our roots while continually evolving to meet the tastes and expectations of our valued customers.</p>
          <button type="button" className="custom_button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
