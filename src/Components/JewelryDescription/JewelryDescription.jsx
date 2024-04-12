import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./JewelryDescription.scss";

function JewelryDetails() {
  const { id } = useParams();
  const item = Products.find((product) => product.id === parseInt(id));
  return (
    <div className="jew-details-container">
      {item ? (
        <div className="jew-details">
          <div className="jew-details-image">
            <img src={item.img} alt="" />
          </div>
          <div className="jew-details-description">
            <div className="title">
              <h2>{item.title}</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis, molestias.
              </p>
            </div>

            <div className="price">
              <p>${item.price}</p>
              <img src="/icons/rates.svg" alt="" />
              <span>123 reviews</span>
            </div>

            <div className="type">
              <p>
                {" "}
                <span>View Metal:</span>{" "}
              </p>
              <p>{item.type}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default JewelryDetails;
