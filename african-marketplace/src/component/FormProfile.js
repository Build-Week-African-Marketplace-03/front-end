import React from "react";

export default function FormProfile(props) {
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
    <form class="flex-column" onSubmit={onSubmit}>
      <label>
        Name:
        <input 
          value={values.sellerName}
          onChange={onChange}
          name='sellerName'
          type='text' 
        />
      </label>
      <label>
        Email:
        <input 
          value= {values.email}
          onChange={onChange}
          name='email'
          type='email' 
        />
      </label>
      <label>
        Phone Number:
        <input 
          value={values.phoneNumber}
          onChange={onChange}
          name='phoneNumber'
          type='tel'
        />
      </label>
      <label>
        Address:
        <input 
         value={values.address}
         onChange={onChange}
         name='address'
         type='address' 
        />
      </label>
      <label>
        Seller ID:
        <input 
          value={values.userName}
          onChange={onChange}
          name='username' 
          type='text'
        />
      </label>
      <label>
        Password
        <input 
          value={values.password} 
          onChange={onChange}
          name='password'
          type='text'
        />
      </label>
      <br />

      <button>Submit</button>
    </form>
  );
}
