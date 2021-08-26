import React, { useState } from "react";
import { sample_items } from '../component/constant';
import ItemForSale from '../component/item_for_sale'

export default function Product(props) {
  return (
    <div className="flex-row">
      <h2>Product Page</h2>
      {Array.from(sample_items).map((object) => {
        return <ItemForSale input_object={object} />;
      })}
    </div>
  )
}
