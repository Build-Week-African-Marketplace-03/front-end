import React, { useState, useEffect } from "react";
import Form_Listing_Item from "../component/form_listing_item";
import Form_Add_Item from "../component/form_add_item";
export default function ProductPage(props) {
  const [stateItem, set_stateItem] = useState(null);
  const array_items = [];

  useEffect(
    () => {

      stateItem && array_items.push()
    },
    //call ueseEffect when the state of stateItem change
    [stateItem]
  );

  return (
    <div>
      <h2>Product Page</h2>

      <Form_Add_Item input_cb_set_stateItem={set_stateItem} />
      <br />

      <Form_Listing_Item />
    </div>
  );
}
