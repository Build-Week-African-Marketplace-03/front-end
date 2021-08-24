import React from "react";

export default function Form_Add_Item(props) {
  const initial_state = {
    name: "",
    quantity: "",
    description: "",
    commodity_category: "",
    sub_category: "",
    commodity_product: "",
  };

  const [stateFormData, set_stateFormData] = useState(initial_state);

  const cb_onChange = (event) => {
    const {
      name,
      quantity,
      description,
      commodity_category,
      sub_category,
      commodity_product,
    } = event.target;
    const { value, name } = event.target;
    set_stateFormData({ ...stateFormData, [name]: valueToUse });
  };

  const cb_onSubmit = (event) => {};

  return (
    <form class="flex-row" onSubmit={cb_onSubmit}>
      <label>
        Name:
        <input
          onChange={cb_onChange}
          name="input_text_name"
          id="input_text_name"
          value={stateFormData.name}
        />
      </label>
      <label>
        Quanity:
        <input
          onChange={cb_onChange}
          name="input_text_quantity"
          id="input_text_quantity"
          value={stateFormData.quantity}
        />
      </label>
      <label>
        Description:
        <input
          onChange={cb_onChange}
          name="input_text_description"
          id="input_text_description"
          value={stateFormData.description}
        />
      </label>
      <label>
        Commodity Category:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_category"
          id="input_text_commodity_category"
          value={stateFormData.commodity_category}
        />
      </label>
      <label>
        Sub-Category:
        <input
          onChange={cb_onChange}
          name="sub_category"
          id="input_text_sub_category"
          value={stateFormData.sub_category}
        />
      </label>
      <label>
        Commodity Product:
        <input
          onChange={cb_onChange}
          name="commodity_product"
          id="input_text_commodity_product"
          value={stateFormData.commodity_product}
        />
      </label>
      <br />

      <button>Submit</button>
    </form>
  );
}
