import React, { useState, useEffect } from "react";
import Form_Listing_Item from "../component/form_listing_item";
import Form_Add_Item from "../component/form_add_item";
import { sample_items } from "../component/constant";
export default function ProductPage(props) {
  const [stateItem, set_stateItem] = useState(null);
  const [stateArrayItems, set_stateArrayItems] = useState(sample_items);
  const [stateCounter, set_stateCounter] = useState(1);

  const cb_get_new_object = () => {
    if (stateItem) {
      const temp_object = stateItem;
      temp_object["id"] = stateCounter;
      set_stateCounter(stateCounter + 1);
      return temp_object;
    }
  };

  useEffect(
    () => {
      if (stateItem) {
        //push item into an array
        set_stateArrayItems([...stateArrayItems, cb_get_new_object()]);
        //reset stateItem to null
        set_stateItem(null);
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
