import React, { useState, useEffect } from "react";
import * as yup from "yup";

export default function Form_Add_Item(props) {
  const initial_state = {
    input_text_name: "",
    input_number_quantity: "",
    input_text_description: "",
    input_text_commodity_category: "",
    input_text_sub_category: "",
    input_text_commodity_product: "",
  };

  //------------------------------------Validation----------------------------
  const schema = yup.object().shape({
    input_text_name: yup.string().required("Text Required"),
    input_number_quantity: yup.number().required("Type in a positive number"),
    input_text_description: yup.string().required("Text Required"),
    input_text_commodity_category: yup.string().required("Text Required"),
    input_text_sub_category: yup.string().required("Text Required"),
    input_text_commodity_product: yup.string().required("Text Required"),
  });

  const [stateError, set_stateError] = useState(initial_state);

  const cb_setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => set_stateError({ ...stateError, [name]: "" }))
      .catch((err) => set_stateError({ ...stateError, [name]: err.errors[0] }));
  };

  const [stateFormData, set_stateFormData] = useState(initial_state);

  const cb_onChange = (event) => {
    const { checked, value, name, type } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });
    cb_setFormErrors(name, value);
  };

  const cb_onSubmit = (event) => {
    //prevent default behavior
    event.preventDefault();
    //construct a new object
    const new_object = {
      name: stateFormData.input_text_name,
      quantity: stateFormData.input_number_quantity,
      description: stateFormData.input_text_description,
      commodity_category: stateFormData.input_text_commodity_category,
      sub_category: stateFormData.input_text_sub_category,
      commodity_product: stateFormData.input_text_commodity_product,
    };
    //return formData to the parent element
    props.input_cb_set_stateItem(new_object);
    //reset form
    set_stateFormData(initial_state);
  };

  return (
    <form class="flex-column" onSubmit={cb_onSubmit}>
      <label>
        Name:
        <input
          onChange={cb_onChange}
          name="input_text_name"
          id="input_text_name"
          value={stateFormData.input_text_name}
          type="text"
        /><span>{stateError.input_text_name}</span>
      </label>
      <label>
        Quanity:
        <input
          onChange={cb_onChange}
          name="input_number_quantity"
          id="input_number_quantity"
          value={stateFormData.input_number_quantity}
          type="number"
          min="1"
        /><span>{stateError.input_number_quantity}</span>
      </label>
      <label>
        Description:
        <input
          onChange={cb_onChange}
          name="input_text_description"
          id="input_text_description"
          value={stateFormData.input_text_description}
          type="text"
        />
      </label>
      <label>
        Commodity Category:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_category"
          id="input_text_commodity_category"
          value={stateFormData.input_text_commodity_category}
          type="text"
        />
      </label>
      <label>
        Sub-Category:
        <input
          onChange={cb_onChange}
          name="input_text_sub_category"
          id="input_text_sub_category"
          value={stateFormData.input_text_sub_category}
          type="text"
        />
      </label>
      <label>
        Commodity Product:
        <input
          onChange={cb_onChange}
          name="input_text_commodity_product"
          id="input_text_commodity_product"
          value={stateFormData.input_text_commodity_product}
          type="text"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
