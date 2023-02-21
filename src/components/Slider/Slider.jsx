import React from "react";
import "./slider.scss";
import { useData } from "../../context/use-data";

export const Slider = () => {
  const { sliderData } = useData();

  return (
    <div className="slider">
      <div className="container mt-5">
        <div id="carouselExampleCaptions" className="carousel slide ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div>
            <div className="carousel-inner">
              {sliderData.map((news, index) => {
                return (
                  <div className="carousel-item active" key={index}>
                    <img
                      src={news.urlToImage}
                      className="d-block w-100"
                      alt=""
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{news.title}</h5>
                      <p>{news.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
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
              data-bs-target="#carouselExampleCaptions"
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
    </div>
  );
};


