import React, { Fragment, useEffect, useState } from "react";

function Carousel(props) {
  console.log(props);
  return (
    <div>
      <div className={` w-[60%] md:w-2/3 lg:w-2/5 flex flex-col left-[50%]  lg:left-[16%] mx-32 sm:mx-36 md:mx-44 lg:mx-[20%] mt-16`}>
        <div
          id="carouselExampleInterval"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-2xl relative">
            <div
              className="carousel-item active bg-cover bg-center h-60"
              data-bs-interval="10000"
              style={{ backgroundImage: `url("../Image/10927348.jpg")` }}
            ></div>
            <div
              className="carousel-item bg-cover bg-center h-60"
              data-bs-interval="2000"
              style={{ backgroundImage: `url("../Image/c2c4e-16091660830969-800.avif")` }}
              ></div>
            <div
              className="carousel-item bg-cover bg-center h-60"
              style={{ backgroundImage: `url("../Image/fortnite-screen-ps4-24may17-cfbc1.webp")` }}
            ></div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
