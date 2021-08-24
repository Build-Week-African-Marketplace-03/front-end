import React from "react";

export default function Form_Item(props) {
  const {
    name,
    quantity,
    description,
    commodityCategory,
    subCategory,
    commodityProduct,
  } = props.input_object;
  return (
    <>
      <tr>
        <td>
          <input value={props.input_object.id} readonly="readonly" />
        </td>
        <td>
          <input value={props.input_object.name} readonly="readonly" />
        </td>
        <td>
          <input value={props.input_object.quantity} readonly="readonly" />
        </td>
        <td>
          <input value={props.input_object.description} />
        </td>
        <td>
          <input
            value={props.input_object.commodity_category}
            readonly="readonly"
          />
        </td>
        <td>
          <input value={props.input_object.sub_category} readonly="readonly" />
        </td>
        <td>
          <input
            value={props.input_object.commodity_product}
            readonly="readonly"
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
