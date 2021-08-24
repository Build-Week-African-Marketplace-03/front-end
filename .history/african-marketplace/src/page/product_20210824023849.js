import React, { useState, useEffect } from "react";
import Form_Listing_Item from "../component/form_listing_item";
import Form_Add_Item from "../component/form_add_item";
import { sample_items } from "../component/constant";
export default function ProductPage(props) {
  const [stateItem, set_stateItem] = useState(null);
  const [stateModifiedItem, set_modifiedItem] = useState(null);
  const [stateArrayItems, set_stateArrayItems] = useState(sample_items);
  const [stateCounter, set_stateCounter] = useState(1);

  /**
   * cb_get_new_object add a key pair value to an object
   */
  const cb_get_new_object = () => {
    if (stateItem) {
      const temp_object = stateItem;
      //add a new key pair value
      temp_object["id"] = stateCounter;
      //increase stateCounter by one increment
      set_stateCounter(stateCounter + 1);
      return temp_object;
    }
  };

  /**
   * below useEffect track the modifiedItem
   * .....the modified item is an item in the form_listing_items, this allow user to edit an existing item on the list
   */
  useEffect(() => {
    if (stateModifiedItem) {
      console.log("product.js, modifiedItem = ", stateModifiedItem);
      const temp_array = stateArrayItems;
      //traverse through temp_array and push the 
      for (let index = 0; index < Array.from(temp_array); index++) {
        if ((temp_array[index].id = stateModifiedItem.id)) {
          temp_array[index] = stateModifiedItem;
          break;
        }
      }
      set_modifiedItem(null);
    }
  }, [stateModifiedItem]);

  /**
   * below useEffect track the state of a stateItem in form_add_items
   * .....when a new item get added, this effect will trigger
   * .....an insertion of a new object into stateArrayItems
   */
  useEffect(
    () => {
      if (stateItem) {
        //push item into an array
        set_stateArrayItems([...stateArrayItems, cb_get_new_object()]);
        //reset stateItem to null
        set_stateItem(null);
      }
    },
    //call ueseEffect when the state of stateItem change
    [stateItem]
  );

  return (
    <div>
      <h2>Product Page</h2>
      <p>Length of array_items is {Array.from(stateArrayItems).length}</p>

      <Form_Add_Item input_cb_set_stateItem={set_stateItem} />
      <br />

      <Form_Listing_Item
        input_arrayItems={stateArrayItems}
        input_cb_set_modifiedItem={set_modifiedItem}
      />

      {Array.from(stateArrayItems) &&
        Array.from(stateArrayItems).map((element) => {
          return (
            <p>
              {element.id}
              {", "}
              {element.name}
              {", "}
              {element.quantity}
              {", "}
              {element.description}
              {", "}
              {element.commodity_category}
              {", "}
              {element.sub_category}
              {", "}
              {element.commodity_product}
            </p>
          );
        })}
    </div>
  );
}