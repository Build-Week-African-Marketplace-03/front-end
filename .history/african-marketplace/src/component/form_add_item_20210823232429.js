import React, { useState, useEffect } from "react";

export default function Form_Add_Item(props) {
  const initial_state = {
    input_text_name: "",
    input_number_quantity: "",
    input_text_description: "",
    input_text_commodity_category: "",
    input_text_sub_category: "",
    input_text_commodity_product: "",
  };

  const [stateFormData, set_stateFormData] = useState(initial_state);

  const cb_onChange = (event) => {
    const { checked, value, name, type } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();

    //reset form
    set_stateFormData(initial_state);
  };

  return (
    <form class="flex-row" onSubmit={cb_onSubmit}>
      <label>
        Name:
        <input
          onChange={cb_onChange}
          name="input_text_name"
          id="input_text_name"
          value={stateFormData.name}
          type="text"
        />
      </label>
      <label>
        Quanity:
        <input
          onChange={cb_onChange}
          name="input_number_quantity"
          id="input_number_quantity"
          value={stateFormData.quantity}
          type="number"
          min=
        />
      </label>
      <label>
        Description:
        <input
          onChange={cb_onChange}
          name="input_text_description"
          id="input_text_description"
          value={stateFormData.description}
          type="text"
        />
      </label>
      <label>
        Commodity Category:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_category"
          id="input_text_commodity_category"
          value={stateFormData.commodity_category}
          type="text"
        />
      </label>
      <label>
        Sub-Category:
        <input
          onChange={cb_onChange}
          name="input_text_sub_category"
          id="input_text_sub_category"
          value={stateFormData.sub_category}
          type="text"
        />
      </label>
      <label>
        Commodity Product:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_product"
          id="input_text_commodity_product"
          value={stateFormData.commodity_product}
          type="text"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
