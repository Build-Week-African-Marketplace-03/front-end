import React, { useState } from "react";

export default function ItemForSale(props) {
  const [stateCount, set_stateCoun] = useState(0);

  const cb_onClick = (target) => {};
  return (
    <div style={{ border: "1px solid black", width: "30%", margin: "5%" }}>
      <p>(Item for sale)</p>
      <p>name: {props.input_object.name}</p>
      <p>quantity: {props.input_object.quantity}</p>
      <p>description: {props.input_object.description}</p>
      <p>commodity product: {props.input_object.commodity_product}</p>
      <p>sub category: {props.input_object.sub_category}</p>
      <p>commodity category: {props.input_object.commodity_category}</p>
      <p>
        <button onClick={cb_onClick}>Subtract</button>
        {"  "}
        {stateCount}
        {"  "}
        <button onClick={cb_onClick}>Add</button>
      </p>
    </div>
  );
}
