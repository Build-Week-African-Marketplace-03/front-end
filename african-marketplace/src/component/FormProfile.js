import React, { useState } from "react";
import { Formik } from "formik";


      
    
  const FormProfile = () => (

     
   <div>
    <Formik
      initialValues={{
        sellerName: '',
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
      }}
      
      onSubmit={(values, { resetForm }) => { 
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        },1000)
      resetForm()
      }}
      >
    {props => (
    <form class="flex-column" onSubmit={props.handleSubmit}>
      <label>
        Name:
        <input 
          value={props.values.sellerName}
          onChange={props.handleChange}
          name='sellerName'
          type='text' 
          />
      </label>
      <label>
        Email:
        <input 
          value= {props.values.email}
          onChange={props.handleChange}
          name='email'
          type='email' 
          />
      </label>
      <label>
        Phone Number:
        <input 
          value={props.values.phoneNumber}
          onChange={props.handleChange}
          name='phoneNumber'
          type='tel'
          />
      </label>
      <label>
        Address:
        <input 
         value={props.values.address}
         onChange={props.handleChange}
         name='address'
         type='address' 
         />
      </label>
      <label>
        Seller ID:
        <input 
          value={props.values.username}
          onChange={props.handleChange}
          name='username' 
          type='text'
          />
      </label>
      <label>
        Password
        <input 
          value={props.values.password} 
          onChange={props.handleChange}
          name='password'
          type='text'
          />
      </label>
      <br />
      <div className='form-submit'>
        <button type='submit '>Submit</button>
        <div>{props.errors.name}</div>
      </div>
    </form>
    )}
    </Formik>
   </div>
  )

export default FormProfile