import React, { useState, useEffect } from "react";
import { Formik } from "formik";




const FormLogin = () => ( 
  <div>
   <Formik
   initialValues={{
     username: '',
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
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          User Name: 
          <input 
            value={props.values.username}
            onChange={props.handleChange}
            name='username'
            type='text'
            />
        </label>
      </div>
      <div>
        <label>
          Password
          <input 
            value={props.values.password}
            onChange={props.handleChange}
            name='password'
            type='password'
            />
        </label>
      </div>
      <button type='submit'>Login</button>
    </form>
  )}
 </Formik>
  </div>
)

export default FormLogin