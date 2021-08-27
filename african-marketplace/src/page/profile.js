import { useState } from "react";
import { reach } from 'yup'
import profileFormSchema from "../validation/profileFormSchema"
import "../css/signup.css"
import { useHistory } from "react-router";
import axios from "axios";

const initialFormValues = {
  username: '',
  password: ''
}

const initialFormErrors = {
  username: '',
  password: ''
}

export default function Signup(props) {

  const { push } = useHistory();

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

  // const formSubmit = () => {
  //   const newUser = {
  //     sellerName: formValues.sellerName.trim(),
  //     email: formValues.email.trim(),
  //     phoneNumber: formValues.phoneNumber.trim(),
  //     address: formValues.address.trim(),
  //     username: formValues.username.trim(),
  //     password: formValues.password.trim()
  //   }
  //   setTimeout(() => {
  //     alert(JSON.stringify(newUser, null, 2))
  //   }, 1000)
  //   setFormValues(initialFormValues)
  // }

  const newUser = () => {

    axios.post('https://build-week-afrimark.herokuapp.com/api/auth/register', formValues)
      .then(res => {
        console.log('success', res)
        push('/login')
      })
      .catch(err => console.log('error', err.message))

  }

  const onSubmit = evt => {
    evt.preventDefault()
    // formSubmit()
    newUser()
  }

  return (
    <div className="signUpMainDiv">
      <div className="signUpCard">
        <div className="signIn">Create Account</div>


        <form className="flex-column" onSubmit={onSubmit}>
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


