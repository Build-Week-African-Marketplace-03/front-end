import React from "react";

export default function FormLogin(props) {
  
    const {
      values,
      submit,
      change,
      disabled,
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
     

  return (
    <form>
      <div>
        <label>
          User Name: 
          <input 
            value={values.userName}
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
      <button>Login</button>
    </form>
  );
 
}