import React from "react";
import "./cards.css";
import { itemData } from "../itemdata";
import { IoMdAdd } from "react-icons/io";

function Cards() {
  return (
    <div className="card-wrapper">
      {itemData.map((item) => (
        <div className="card-container" key={item.id}>
          <div className="top-card">
            <img className="item-image" src={item.image} alt="item" />
            <div className="order-button">
              <IoMdAdd className="addSign" /> 
             Add to cart
            </div>
          </div>

          <div className="bottom-card">
            <p className="item-description">{item.desciption}</p>
            <p className="item-price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
