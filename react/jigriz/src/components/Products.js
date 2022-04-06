import React from "react";
import data from "../data";
import Card from "./Card";

export default function Products() {
  const cards = data.map(item=> {
    return (
      <Card
       item = {item}
      />
    )
  })
  return (
  
    <div className="products">
      <p className="products-text">our products</p>
      <div className="d-flex products-div justify-content-around flex-wrap products-cards">{cards}</div>
      <p className="view-all-products">VIEW ALL PRODUCTS</p>
    </div>
  );
}
