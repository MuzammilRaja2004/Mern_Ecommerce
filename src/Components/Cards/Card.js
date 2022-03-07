import React from "react";
import { cardData1, cardBig, cardData2 } from "./Carddata";
const Card = () => {
  return (
    <>
      <div className="card-container"> 
      <h3 className="card_head">New Products</h3>
      <div className="main_cards">
        <div className="inner_cards1">
          {cardData1.map((item, index) => {
            return (
              <>
                <div className="card" style={{ width: "11rem" }}>
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{item.details}</p>
                    <h5 className="card-title"> {item.price} </h5>
                    <a href="#" className="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="inner_card2">
          {cardBig.map((item, index) => {
            return (
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="image"
                  style={{ marginBottom: "7rem", marginTop: "8rem" }}
                />
                <div className="card-body">
                  <p className="card-text">{item.details}</p>
                  <h5 className="card-title"> {item.price} </h5>
                  <a href="#" className="btn btn-primary">
                    Add To Cart
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="inner_cards3">
          {cardData2.map((item, index) => {
            return (
              <>
                <div className="card" style={{ width: "11rem" }}>
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {item.details}
                    </p>
                    <h5 className="card-title">{item.price}</h5>
                    <a href="#" className="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <h6 className="view_text">View All</h6>
      </div>
    </>
  );
};

export default Card;
