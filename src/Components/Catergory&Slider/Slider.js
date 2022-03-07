import React from "react";
import Category from './Category';
import '../../App.css'
;

const Slider = () => {
  return (
    <>
    <div className="main_slide_cate">
        <div className="cate">
            <Category/>
        </div>
    <div className="slider_div">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073_960_720.jpg"
              className="d-block w-100"
              alt="..."
              height={513}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1643751105771-d3d6543e8d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              alt="..."
              height={513}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073_960_720.jpg"
              className="d-block w-100"
              alt="..."
              height={513}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
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
    </>
  );
};

export default Slider;
