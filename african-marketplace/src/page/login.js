import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";



export default function Login(props) {

  const [initialLogin, setInitialLogin] = useState({
      username: '',
      password: ''
  })

  const { push } = useHistory();

  const onChange = (e) => {
    setInitialLogin({
      ...initialLogin,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios.post('https://build-week-afrimark.herokuapp.com/api/auth/login', initialLogin)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      push('/inventory');
    })
    .catch(err => {
      console.log(err)
    })
  }

  const {username, password} = initialLogin;

  return (
    <div className="loginMainDiv signUpMainDiv">
      <div className="loginCard signUpCard">
        <div className="signIn signIn"> Login </div>

        <form onSubmit={onSubmit}>
          <div>
            <label>
              <input
                value={username}
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
                value={password}
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
