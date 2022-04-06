import React from "react";
import pic1 from "./../images/almonds.webp"
 export default function Card(props){
   return(
    <div class="card">
      <div className="products-image">
      <img class="card-img-top" src= {props.item.src} alt="Card image cap" />
      </div>
    <div class="card-body">
      <h5 class="card-title">{props.item.title}</h5>
      <p class="card-text">{props.item.description}</p>
      <a className="card-shop-now" href="/" >SHOP NOW</a>
    </div>
  </div>
   );
 }