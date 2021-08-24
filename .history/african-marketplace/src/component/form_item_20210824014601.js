import React from "react";

export default function Form_Item(props) {
  const cb_onChange = (event) => {
    //props.input_cb_set_modifiedItem

    const { value, name } = event.target;
    props.input_object[name] = value;
  };

  return (
    <>
      <tr>
        <td>
          <input value={props.input_object.id} readonly="readonly" />
        </td>
        <td>
          <input
            value={props.input_object.name}
            onChange={cb_onChange}
            name="input_text_name"
          />
        </td>
        <td>
          <input
            value={props.input_object.quantity}
            onChange={cb_onChange}
            name="input_number_quantity"
          />
        </td>
        <td>
          <input
            value={props.input_object.description}
            onChange={cb_onChange}
            name="input_text_description"
          />
        </td>
        <td>
          <input
            value={props.input_object.commodity_category}
            onChange={cb_onChange}
            name="input_text_commodity category"
          />
        </td>
        <td>
          <input
            value={props.input_object.sub_category}
            onChange={cb_onChange}
            name="input_text_sub_category"
          />
        </td>
        <td>
          <input
            value={props.input_object.commodity_product}
            onChange={cb_onChange}
            name="input_text_commodity_product"
          />
        </td>
      </tr>
    </>
  );
}

/*
<form>
    <label>
      Name: *
    <input value={props.input_object.name} />
  </label>
  <label>
      Quanity: 
    <input value={props.input_object.quantity} />
  </label>
  <label>
    Description:
    <input value={props.input_object.description} />
  </label>
  <label>
      Commodity Category:
    <input value={props.input_object.commodity_category} />
  </label>
  <label>
      Sub-Category:
    <input value={props.input_object.sub_category} />
  </label>
  <label>
      Commodity Product: 
    <input value={props.input_object.commodity_product} />
  </label>
</form>

*/
