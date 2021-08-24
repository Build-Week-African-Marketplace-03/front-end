import React from "react";

import Form_Item from "../component/form_item";

export default function Form_Listing_Item(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Commodity Category</th>
          <th>Sub Category</th>
          <th>Commodity Product</th>
        </tr>
      </thead>
      <tbody>

    </table>
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