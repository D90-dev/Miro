import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import "./Jewelry.scss";
import Input from "../../Components/Input/Input";
import TabsWithSlots from "../../Components/Tabs/Tabs";
import FAQ from "../../Components/Faq/Faq";
import Products from "../../Components/Products/Products";
import JewelryCard from "../../Components/JewelryCard/JewelryCard";

function Jewelry() {
  const [items, setItems] = useState(Products);
  const [searchTerm, setSearchTerm] = useState("");
  const titles = ["Products", "Editorial"];
  const content = [
    <div className="products">
      {items.map((product) => (
        <Link
          key={product.id}
          to={`/jewelry/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <JewelryCard
            type={product.type}
            icon={product.img}
            price={product.price}
            title={product.title}
          />
        </Link>
      ))}
    </div>,
    <FAQ />,
  ];
  useEffect(() => {
    const delay = setTimeout(() => {
      const filteredItems = Products.filter((item) =>
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(filteredItems);
    }, 600);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="products-container">
      <h2 className="search-title">Search for ‘jewelry’</h2>
      <div>
        <Input
          inputValue={searchTerm}
          inputFunction={handleSearch}
          inputType="jewelry"
          placeholder="Find the type of metal"
        />
      </div>

      <p>{items.length} results</p>

      <TabsWithSlots titles={titles} content={content} />
    </div>
  );
}

export default memo(Jewelry);
