import React, { useState } from "react";

export default function Specific_Product(props) {
  const { product_id } = props.match.params;

  return (
    <div>
      <p>product_id = {product_id}</p>
    </div>
  );
}

/*

<div>
      <h3>Specific Product Page</h3>
      <p>id: {props.input_object.id}</p>
      <p>name: {props.input_object.name}</p>
      <p>description: {props.input_object.description}</p>
      <p>commodity category: {props.input_object.commodity_category}</p>
      <p>sub category: {props.input_object.sub_category}</p>
      <p>commodity product: {props.input_object.commodity_product}</p>
</div>

*/
