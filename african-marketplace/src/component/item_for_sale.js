<<<<<<< HEAD
import React, { useState } from "react"
import "../css/items.css"
=======
import { useState } from "react";
>>>>>>> 1d2dedb588c5f08d3e72929e1497b1643f04ced1

export default function ItemForSale(props) {
  const [stateCount, set_stateCount] = useState(0)

  const cb_onClick_Subtract = (target) => {
    if (stateCount > 0) {
      set_stateCount(stateCount - 1)
    }
  }
  const cb_onClick_Add = (target) => {
    set_stateCount(stateCount + 1)
  }
  return (
    <div className="itemBox">
      {/* style={{ border: "1px solid black", width: "30%", margin: "5%" }}> */}
      <p>(Item for sale)</p>
      <p>name of product: {props.input_object.name}</p>
      <p>quantity: {props.input_object.quantity}</p>
      <p>description: {props.input_object.description}</p>
      <p>sub category: {props.input_object.sub_category}</p>

      <div className="addSubtractDiv">
        <button className="subtract" onClick={cb_onClick_Subtract}>
          -
        </button>
        {"  "}
        {stateCount}
        {"  "}
        <button className="add" onClick={cb_onClick_Add}>
          +
        </button>
      </div>
    </div>
  )
}
