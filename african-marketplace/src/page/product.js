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
    </div>
  )
}
