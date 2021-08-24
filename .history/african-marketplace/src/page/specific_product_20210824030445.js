import React from "react"

export default function Specific_Product(props){
    return(
        <div>
            <h3>Specific Product Page</h3>
            <p>id: {props.input_object.id}<p>
            <p>name: {props.input_object.name}<p>
            <p>description: {props.input_object.description}<p>
            <p>id: {props.input_object.id}<p>

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
            </p></p>
        </div>
    )
}