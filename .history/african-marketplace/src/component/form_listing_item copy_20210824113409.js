import React, { useState } from "react";

import Form_Inventory_Edit_Item from "./form_inventory_edit_item";

export default function Form_Listing_Item(props) {


  return (
    <div>

          {Array.from(props.input_arrayItems).map((object) => {
            return (
              <Form_Inventory_Edit_Item
                input_object={object}
                input_cb_set_modifiedItem={props.input_cb_set_modifiedItem}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/*

return (
    <div>
      <label>Name</label>
      
    </div>

    {Array.from(props.input_arrayItems).map((object) => {
      return <Form_Item input_object={object} />;
    })}
      
  );

*/
