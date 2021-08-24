import React, { useState, useEffect } from "react";
import loginSchema from "../validation/loginSchema";
import { reach } from 'yup'


const initialDisabled = true

export default function FormLogin(props) {
  
  const [disabled, setDisabled] = useState(initialDisabled)
  
    const {
      values,
      submit,
      change,
      // disabled,
      errors
    } = props
   
    const onSubmit = evt => {
      evt.preventDefault()
      submit()
    }
   
    const onChange = evt => {
      const { name, value } = evt.target
      change(name, value)
    }
     
    useEffect(() => {
      // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
      loginSchema.isValid(values).then(valid => setDisabled(!valid))
    }, [values])
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          User Name: 
          <input 
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input 
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
      </div>
      <button disabled={disabled}>Login</button>
    </form>
  );
 
}