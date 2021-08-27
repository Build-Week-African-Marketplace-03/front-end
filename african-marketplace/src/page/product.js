<<<<<<< HEAD
import React from "react"
import Listing_ItemForSales from "../component/listing_items_for_sales"
import "../css/product.css"
export default function Product(props) {
  return (
    <div className="productMainDiv">
      <div className="topBar">
        <h2 class="productPage">Product Page</h2>
        <button className="newItem">+NEW ITEM</button>
      </div>
      <Listing_ItemForSales />
=======
import React, { useState } from "react";
import { sample_items } from '../component/constant';
import ItemForSale from '../component/item_for_sale'

export default function Product(props) {
  return (
    <div className="flex-row">
      <h2>Product Page</h2>
      {Array.from(sample_items).map((object) => {
        return <ItemForSale input_object={object} />;
      })}
>>>>>>> 1d2dedb588c5f08d3e72929e1497b1643f04ced1
    </div>
  )
}
