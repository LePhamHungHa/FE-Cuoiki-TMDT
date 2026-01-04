import React from "react";
import "../../assets/css/cardCss.css";

const ProductCard = ({ product }) => {
  const formatPrice = price =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.thumbnail} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h4 className="product-name">{product.name}</h4>

        <div className="product-price">
          <span className="current-price">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>

      <button className="add-to-cart-btn">
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
