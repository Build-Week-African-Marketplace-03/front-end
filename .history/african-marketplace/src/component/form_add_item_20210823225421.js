import React from "react";

export default function Form_Add_Item(props) {

  // const {name, quantity, description, commodity_category, sub_category, commodity_product }

const cb_onChange = (event) => {

}

const cb_onSubmit = (event) => {

}

  return (
    <form class="flex-row" onSubmit ={cb_onSubmit}>
      <label>
        Name:
        <input value="" 
        onChange={cb_onChange}
        />
      </label>
      <label>
        Quanity:
        <input value="" />
      </label>
      <label>
        Description:
        <input value="" />
      </label>
      <label>
        Commodity Category:
        <input value="" />
      </label>
      <label>
        Sub-Category:
        <input value="" />
      </label>
      <label>
        Commodity Product:
        <input value="" />
      </label>
      <br />
      
      <button>Submit</button>
    </form>
  );
}
