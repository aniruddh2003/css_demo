import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img4 from "../assets/img3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const Carousels = () => {
  return (
    <div className="caro lg:h-[40%] sm:h-[40%] p-1 sm:p-2 m-auto mt-2 bg-gradient-to-r from-orange-500 to-yellow-500">
      <Carousel
        autoPlay
        interval={2000}
        transitionTime={1000}
        width={"90%"}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="caro  p-1 sm:p-2 m-1 md:m-3 lg:m-4 bg-white flex justify-center items-center"
      >
        <div className="overflow-hidden">
          <img
            src={img1}
            className="h-[30vh] md:h-[80vh] sm:h-[50vh]"
            style={{
              borderRadius: "2rem",
              objectFit: "contain",
              width: "90vw",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={img2}
            className="h-[30vh] md:h-[80vh] sm:h-[50vh]"
            style={{
              borderRadius: "2rem",
              objectFit: "contain",
              width: "90vw",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={img4}
            className="h-[30vh] md:h-[80vh] sm:h-[50vh]"
            style={{
              borderRadius: "2rem",
              objectFit: "contain",
              width: "90vw",
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
