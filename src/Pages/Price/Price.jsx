import React, { useState, useEffect, memo } from "react";
import Products from "../../Components/Products/Products";
import { Link } from "react-router-dom";

import "./Price.scss";
import JewelryCard from "../../Components/JewelryCard/JewelryCard";
import { Range } from "react-range";

function Price() {
  const [values, setValues] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(Products);

  useEffect(() => {
    handleFilterChange();
  }, [values]);

  const handleFilterChange = () => {
    const [minPrice, maxPrice] = values;
    const filtered = Products.filter((product) => {
      const price = parseFloat(product.price);
      return (
        (minPrice === 0 || price >= minPrice) &&
        (maxPrice === 1000 || price <= maxPrice)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="inputs">
        <Range
          values={values}
          step={1}
          min={0}
          max={1000}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "50%",
                borderRadius: "5px",
                backgroundColor: "#2B2F3F",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="range-input-button" />
          )}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <span>
            Min $ <br />
            {values[0]}
          </span>
          <span>
            Max $ <br /> {values[1]}
          </span>
        </div>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
                  <Link
                  key={product.id}
                  to={`/jewelry/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
          <JewelryCard
            key={product.id}
            type={product.type}
            icon={product.img}
            price={product.price}
            title={product.title}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(Price);
