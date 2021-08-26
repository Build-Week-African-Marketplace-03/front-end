import React, { useState } from "react"
import { ErrorMessage, Formik } from "formik"
import profileFormSchema from "../validation/profileFormSchema"
import "../css/signup.css"

const FormProfile = () => (
  <div className="signUpMainDiv">
    <div className="signUpCard">
      <div className="signIn">Create Account</div>
      <Formik
        initialValues={{
          sellerName: "",
          username: "",
          email: "",
          phoneNumber: "",
          address: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
          }, 1000)
          resetForm()
        }}
        validationSchema={profileFormSchema}
      >
        {(props) => (
          <form className="flex-column" onSubmit={props.handleSubmit}>
            <label>
              {/* Name: */}
              <input
                value={props.values.sellerName}
                onChange={props.handleChange}
                name="sellerName"
                type="text"
                className="nameBox"
                placeholder="☺ Name"
              />
              <div>{props.errors.sellerName}</div>
            </label>
            <label>
              {/* Email: */}
              <input
                value={props.values.email}
                onChange={props.handleChange}
                name="email"
                type="email"
                className="nameBox"
                placeholder="✉ Email"
              />
              <div>{props.errors.email}</div>
            </label>
            <label>
              {/* Phone Number: */}
              <input
                value={props.values.phoneNumber}
                onChange={props.handleChange}
                name="phoneNumber"
                type="tel"
                className="nameBox"
                placeholder="☏ Phone Number"
              />
              <div>{props.errors.phoneNumber}</div>
            </label>
            <label>
              {/* Address: */}
              <input
                value={props.values.address}
                onChange={props.handleChange}
                name="address"
                type="address"
                className="nameBox"
                placeholder="⌂ Address"
              />
              <div>{props.errors.address}</div>
            </label>
            <label>
              {/* Seller ID: */}
              <input
                value={props.values.username}
                onChange={props.handleChange}
                name="username"
                type="text"
                className="nameBox"
                placeholder="♯ Seller ID"
              />
              <div>{props.errors.username}</div>
            </label>
            <label>
              {/* Password */}
              <input
                value={props.values.password}
                onChange={props.handleChange}
                name="password"
                type="password"
                className="nameBox"
                placeholder="☑ Password"
              />
              <div>{props.errors.password}</div>
            </label>
            <br />
            <div className="form-submit">
              <button type="submit" className="submitSI">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </div>
)

export default FormProfile
