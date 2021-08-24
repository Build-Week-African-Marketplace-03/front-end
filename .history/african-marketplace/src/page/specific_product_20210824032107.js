import React, { useState } from "react";

export default function Specific_Product(props) {
  const [productID, set_productID] = useState(null);
  const { product_id } = props.match.params;

  return (
    
  );
}
