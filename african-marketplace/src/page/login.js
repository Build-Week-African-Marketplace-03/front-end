import React, { useState } from "react"


const initialFormValues = {
  username: '',
  password: ''
}


export default function Login(props) {
  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
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
    const login = {
      username: formValues.username.trim(),
      email: formValues.username.trim()
    }
    setTimeout(() => {
      alert(JSON.stringify(login, null, 2))
    }, 1000)
    setFormValues(initialFormValues)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    formSubmit()
  }

  return (
    <div className="loginMainDiv signUpMainDiv">
      <div className="loginCard signUpCard">
        <div className="signIn signIn"> Login </div>

        <form onSubmit={onSubmit}>
          <div>
            <label>
              <input
                value={formValues.username}
                onChange={onChange}
                name="username"
                type="text"
                className="nameBox"
                placeholder="☺ Username "
              />
            </label>
          </div>
          <div>
            <label>
              <input
                value={formValues.password}
                onChange={onChange}
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

      </div>
    </div>
  )
}
