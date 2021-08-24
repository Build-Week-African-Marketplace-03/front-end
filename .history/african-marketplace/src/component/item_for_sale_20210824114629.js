import React from "react";

export default function ItemForSale(props) {
  return (
    <div>
      <p>(Item for sale)</p>
      <p>name: {props.input_object.name}</p>
      <p>quantity: {props.input_object.name}</p>
    </div>
  );
}
