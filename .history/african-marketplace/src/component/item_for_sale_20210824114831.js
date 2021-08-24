import React from "react";

export default function ItemForSale(props) {
  return (
    <div style="">
      <p>(Item for sale)</p>
      <p>name: {props.input_object.name}</p>
      <p>quantity: {props.input_object.quantity}</p>
      <p>description: {props.input_object.description}</p>
      <p>commodity product: {props.input_object.commodity_product}</p>
      <p>sub category: {props.input_object.sub_category}</p>
      <p>commodity category: {props.input_object.commodity_category}</p>
    </div>
  );
}
