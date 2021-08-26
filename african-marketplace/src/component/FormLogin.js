import React, { useState, useEffect } from "react"
import { Formik } from "formik"
import loginSchema from "../validation/loginSchema"

const FormLogin = () => (
  <div className="loginMainDiv signUpMainDiv">
    <div className="loginCard signUpCard">
      <div className="signIn signIn"> Login </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
          }, 1000)
          resetForm()
        }}
        validationSchema={loginSchema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <label>
                {/* User Name: */}
                <input
                  value={props.values.username}
                  onChange={props.handleChange}
                  name="username"
                  type="text"
                  className="nameBox"
                  placeholder="☺ Username "
                />
              </label>
            </div>
            <div>
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
              </label>
            </div>
            <button type="submit" className="submitSI">
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  </div>
)

export default FormLogin
