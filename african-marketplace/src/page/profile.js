import { Form } from "react-bootstrap"
import { useState } from "react";
import { reach } from 'yup'
import profileFormSchema from "../validation/profileFormSchema"
import "../css/signup.css"

const initialFormValues = {
  sellerName: '',
  email: '',
  phoneNumber: '',
  address: '',
  username: '',
  password: ''
}

const initialFormErrors = {
  sellerName: '',
  email: '',
  phoneNumber: '',
  address: '',
  username: '',
  password: ''
}

export default function Signup(props) {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    reach(profileFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  const formSubmit = () => {
    const newUser = {
      sellerName: formValues.username.trim(),
      email: formValues.email.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      address: formValues.address.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    setTimeout(() => {
      alert(JSON.stringify(newUser, null, 2))
    }, 1000)
    setFormValues(initialFormValues)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    formSubmit()
  }

  return (
    <div className="signUpMainDiv">
      <div className="signUpCard">
        <div className="signIn">Create Account</div>


        <form className="flex-column" onSubmit={onSubmit}>
          <label>
            {/* Name: */}
            <input
              value={formValues.sellerName}
              onChange={onChange}
              name="sellerName"
              type="text"
              className="nameBox"
              placeholder="☺ Name"
            />
            <div>{formErrors.sellerName}</div>
          </label>
          <label>
            {/* Email: */}
            <input
              value={formValues.email}
              onChange={onChange}
              name="email"
              type="email"
              className="nameBox"
              placeholder="✉ Email"
            />
            <div>{formErrors.email}</div>
          </label>
          <label>
            {/* Phone Number: */}
            <input
              value={formValues.phoneNumber}
              onChange={onChange}
              name="phoneNumber"
              type="tel"
              className="nameBox"
              placeholder="☏ Phone Number"
            />
            <div>{formErrors.phoneNumber}</div>
          </label>
          <label>
            {/* Address: */}
            <input
              value={formValues.address}
              onChange={onChange}
              name="address"
              type="address"
              className="nameBox"
              placeholder="⌂ Address"
            />
            <div>{formErrors.address}</div>
          </label>
          <label>
            {/* Seller ID: */}
            <input
              value={formValues.username}
              onChange={onChange}
              name="username"
              type="text"
              className="nameBox"
              placeholder="♯ Username"
            />
            <div>{formErrors.username}</div>
          </label>
          <label>
            {/* Password */}
            <input
              value={formValues.password}
              onChange={onChange}
              name="password"
              type="password"
              className="nameBox"
              placeholder="☑ Password"
            />
            <div>{formErrors.password}</div>
          </label>
          <br />
          <div className="form-submit">
            <button type="submit" className="submitSI">
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}


