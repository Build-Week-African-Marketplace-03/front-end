import React, { useState, useEffect } from "react";
import Form_Listing_Item from "../component/form_listing_item";
import Form_Add_Item from "../component/form_add_item";
export default function ProductPage(props) {
  const [stateItem, set_stateItem] = useState(null);
  const [stateArrayItems, set_stateArrayItems] = useState([]);
  const array_items = [];

  useEffect(
    () => {
      if (stateItem) {
        //push item into an array
        set_stateArrayItems(...stateArrayItems, )
        array_items.push(stateItem);
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
      <p>Length of array_items is {array_items.length}</p>

      <Form_Add_Item input_cb_set_stateItem={set_stateItem} />
      <br />

      {/* <Form_Listing_Item /> */}
    </div>
  );
}
