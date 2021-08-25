import React from "react";
import { Formik } from 'formik'
import contactSchema from "../validation/contactSchema";


const FormContact = () => ( 
  <div>
   <Formik
   initialValues={{
     name: '',
     email: '',
     comment: '',
   }}
  
   onSubmit={(values, { resetForm }) => { 
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    },1000)
  resetForm()
  }}
  validationSchema={contactSchema}
  >
  
  {props => ( 
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          Name: 
          <input 
            value={props.values.name}
            onChange={props.handleChange}
            name='name'
            type='text'
            />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            value={props.values.email}
            onChange={props.handleChange}
            name='email'
            type='email'
            />
        </label>
        <label>
          Comment:
          <input 
            value={props.values.comment}
            onChange={props.handleChange}
            name='comment'
            type='text'
            />
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )}
 </Formik>
  </div>
)

export default FormContact