import React from "react";
import { sample_items } from "./constant";
import Form_Item from "../component/form_item";

export default function Form_Listing_Item(props) {
  return (
    <div>
      <label>Name</label>
      {Array.from(props.input_arrayItems).map((object) => {
        return <Form_Item input_object={object} />;
      })}
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>

    </table>
  );
}

/*

return (
    <div>
      <label>Name</label>
      {Array.from(props.input_arrayItems).map((object) => {
        return <Form_Item input_object={object} />;
      })}
    </div>
  );

*/
