import React from "react";
import Form_Listing_Item from "../component/form_listing_item";
import Form_Add_Item from "../component/form_add_item";
export default function ProductPage(props) {
  return (
    <div>
      <h2>Product Page</h2>

      <Form_Add_Item />
      <br />

      <Form_Listing_Item />
    </div>
  );
}
