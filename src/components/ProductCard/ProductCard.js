import React from "react";
import "./productCard.scss";

function ProductCard({ cardData }) {
  return (
    <div className="Product-Card">
      <div className="card-img">
        <img src={cardData.pImg} />
      </div>

      <div className="card-details">
        <p className="modelName">{cardData.model_Name}</p>
        <p className="price">$ {cardData.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
