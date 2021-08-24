import React, { useState, useEffect } from "react";
import Form_Listing_Item from "../component/form_listing_item";
import Form_Add_Item from "../component/form_add_item";
import { sample_items } from "../component/constant";
export default function ProductPage(props) {
  const [stateItem, set_stateItem] = useState(null);
  const [stateArrayItems, set_stateArrayItems] = useState(sample_items);
  const [stateCounter, set_stateCounter] = useState[0];

  const cb_get_new_object = () =>{
    if (stateItem) {
      const temp_object  = stateItem;
      temp_object.add
    }
  }

  useEffect(
    () => {
      if (stateItem) {
        //push item into an array
        set_stateArrayItems([...stateArrayItems, stateItem]);
        //reset stateItem to null
        set_stateItem(null);
        //debug
        console.log("array_items.length = ", array_items.length);
      }
    },
    //call ueseEffect when the state of stateItem change
    [stateItem]
  );

  return (
    <div>
      <h2>Product Page</h2>
      <p>Length of array_items is {Array.from(stateArrayItems).length}</p>

      <Form_Add_Item input_cb_set_stateItem={set_stateItem} />
      <br />

      <Form_Listing_Item input_arrayItems={stateArrayItems} />
    </div>
  );
}
