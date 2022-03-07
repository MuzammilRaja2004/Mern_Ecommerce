import React from "react";
import  '../../App.css';


import AndroidTv from '../../images/cate-icons/AndroidTv.png';
import Laptops from '../../images/cate-icons/Laptops.png';
import Games from '../../images/cate-icons/Games.png';
import Convertable from '../../images/cate-icons/Convertable.png';
import Certified from '../../images/cate-icons/certified.png';
import Graphics from '../../images/cate-icons/Graphics.png';
import Accessories from '../../images/cate-icons/Accessories.png';
;

;

const categoryList= [
  {
    id: 1,
    name: "Android Tv Box",
    image: AndroidTv,
  },
  {
    id: 2,
    name: "Laptops",
    image: Laptops,
  },
  {
    id: 3,
    name: "Gaming Laptops",
    image: Games,
  },
  {
    id: 4,
    name: "X360 Convertable Laptops",
    image: Convertable,
  },
  {
    id: 5,
    name: "Certified Refurbished",
    image: Certified,
  },
  {
    id: 6,
    name: "Graphic Cards",
    image: Graphics,
  },
  {
    id: 7,
    name: "Accessories",
    image: Accessories,
  },
  {
    id: 8,
    name: "Apple Products",
    image: Accessories,
  },
  {
    id: 9,
    name: "Bags",
    image: Accessories,
  },
  {
    id: 10,
    name: "Batterys",
    image: Accessories,
  },
  {
    id: 11,
    name: "Shops & Stores",
    image: Accessories,
  },
];

const Category = () => {
  return (
    <>
      <div className="main_cate">
        <h6 className="cateHead">SHOP BY CATEGORY</h6>
        <div className="inner_cate">
            {
              categoryList.map((item, index) => {
                console.log(item.image);
                return (
                          
                  <div className="cate_item" key={index}>
                            <div className="cate_image">
                                <img src={item.image} alt='error'className={[`icons_image icons_image${index} `]} />
                            </div>
                            <div className="cate_name">
                              <p>{item.name}</p>
                              </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Category;
