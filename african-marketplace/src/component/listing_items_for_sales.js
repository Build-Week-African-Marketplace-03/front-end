import React from "react"

import { sample_items } from "./constant"
import ItemForSale from "./item_for_sale"
import "../css/itemsforsale.css"

export default function Listing_ItemForSales(props) {
  //for now, the props.input_array_of_objects =  sample_items
  // props.input_array_of_objects = sample_items;
  return (
    <div className="productsMainDiv">
      <div className="flex-row">
        {Array.from(sample_items).map((object) => {
          return <ItemForSale input_object={object} />
        })}
      </div>
    </div>
  )
}
