import React, { useState } from "react";

import 
import ItemForSale from "./item_for_sale";

export default function Listing_ItemForSales(props) {
  return (
    <div>
      {Array.from(props.input_arrayItems).map((object) => {
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
