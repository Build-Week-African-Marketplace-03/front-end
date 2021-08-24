import React from "react";

export default function Form_Add_Item(props) {
  const initial_state = {
    name,
    quantity,
    description,
    commodity_category,
    sub_category,
    commodity_product,
  };

  const [stateFormData, set_stateFormData] = useState(initial_state);

  const cb_onChange = (event) => {};

  const cb_onSubmit = (event) => {};

  return (
    <form class="flex-row" onSubmit={cb_onSubmit}>
      <label>
        Name:
        <input
          onChange={cb_onChange}
          name="name"
          id="input_text_name"
          value={stateFormData.name}
        />
      </label>
      <label>
        Quanity:
        <input
          onChange={cb_onChange}
          name="quantity"
          id="input_text_quantity"
          value={stateFormData.quantity}
        />
      </label>
      <label>
        Description:
        <input
          onChange={cb_onChange}
          name="description"
          id="input_text_description"
          value={stateFormData.description}
        />
      </label>
      <label>
        Commodity Category:
        <input
          onChange={cb_onChange}
          name="name"
          id="input_text_commodity_category"
          value={stateFormData.co}
        />
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
