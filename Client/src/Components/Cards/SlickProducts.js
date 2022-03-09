import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../App.css'
export default class SwipeToSlide extends Component {
    render() {
      const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
      return (
        <div className="main_div">
          <h3 className="slide_head">Feature Products</h3>
          <Slider {...settings}>
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""  className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1555117391-6c0795768da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div >
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1509701852059-c221a6f1e878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxsYXB0b3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256__340.jpg" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762__340.jpg" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
            <div className="my_div">
              <img src="https://images.unsplash.com/photo-1621570070325-dcf471675e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="image" />
              <p className="model">Model</p>
              <p className="price">price</p>
            </div>
          </Slider>
        </div>
      );
    }
  }