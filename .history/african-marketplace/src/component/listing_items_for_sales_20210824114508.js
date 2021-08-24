import React, { useState } from "react";

import { sample_items } from "./constant";
import ItemForSale from "./item_for_sale";

export default function Listing_ItemForSales(props) {
  //for now, the props.input_array_of_objects =  sample_items
  // props.input_array_of_objects = sample_items;
  return (
    <div>
      {Array.from(sample_items).map((object) => {
        return <ItemForSale input_object={object} />;
      })}
    </div>
  );
}

/*

return (
    <div>
      <label>Name</label>
      
    </div>

    {Array.from(props.input_arrayItems).map((object) => {
      return <Form_Item input_object={object} />;
    })}
      
  );

*/
