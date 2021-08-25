import React, { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import profileFormSchema from "../validation/profileFormSchema";


      
    
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
      validationSchema={profileFormSchema}
      >
    {props => (
    <form className="flex-column" onSubmit={props.handleSubmit}>
      <label>
        Name:
        <input 
          value={props.values.sellerName}
          onChange={props.handleChange}
          name='sellerName'
          type='text' 
          />
          <div>{props.errors.sellerName}</div>
      </label>
      <label>
        Email:
        <input 
          value= {props.values.email}
          onChange={props.handleChange}
          name='email'
          type='email' 
          />
          <div>{props.errors.email}</div>
      </label>
      <label>
        Phone Number:
        <input 
          value={props.values.phoneNumber}
          onChange={props.handleChange}
          name='phoneNumber'
          type='tel'
          />
          <div>{props.errors.phoneNumber}</div>
      </label>
      <label>
        Address:
        <input 
         value={props.values.address}
         onChange={props.handleChange}
         name='address'
         type='address' 
         />
         <div>{props.errors.address}</div>
      </label>
      <label>
        Seller ID:
        <input 
          value={props.values.username}
          onChange={props.handleChange}
          name='username' 
          type='text'
          />
          <div>{props.errors.username}</div>
      </label>
      <label>
        Password
        <input 
          value={props.values.password} 
          onChange={props.handleChange}
          name='password'
          type='password'
          />
          <div>{props.errors.password}</div>
      </label>
      <br />
      <div className='form-submit'>
        <button type='submit' >Submit</button>
      </div>
    </form>
    )}
    </Formik>
   </div>
  )

export default FormProfile