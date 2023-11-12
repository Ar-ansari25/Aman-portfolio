import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Port from "../../img/port.png";
import Color from "../../img/color.png";
import QR from "../../img/qr.png";
import Book from "../../img/book.png";
import Turtle from "../../img/turtle.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://aman-portfolio-ten.vercel.app/">
            <img src={Port} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://qr-generator-master-ten.vercel.app/">
            <img src={QR} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://florida-tech-master.vercel.app/">
            <img src={Book} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://color-generator-master.vercel.app/">
            <img src={Color} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://i-turtle-master-jozc.vercel.app/">
            <img src={Turtle} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
