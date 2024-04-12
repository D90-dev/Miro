import { React, memo } from "react";
import "./JewelryCard.scss";
function JewelryCard({ icon, title, type, price }) {
  return (
    <div className="product-container">
      <div className="products-container-item">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
        <p>Type: {type}</p>
        <p>Priced from ${price}</p>
      </div>
    </div>
  );
}

export default memo(JewelryCard);
