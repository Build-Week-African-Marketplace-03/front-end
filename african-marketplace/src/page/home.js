import React from "react"
import FormLogin from "../component/FormLogin"
import ButtonStyle from "../css/Button"
import Button from "../css/Button"

const save = "saved"

const homeStyle = {
  backgroundColor: "#deedd6",
}

export default function HomePage(props) {
  return (
    <>
      <nav>
        <a href="/" style={{ color: "777", textDecoration: "none" }}>
          Log in
        </a>
        <Button type="secondary">Sign up</Button>
      </nav>
      <div classname="homeMainDiv" style={homeStyle}>
        <h2>
          Anyone can start selling today - <br></br>it really is that simple
        </h2>
        <div></div>
        <div>
          <p>African women are cut off from the global economy.</p>
          <p>They have produce, but no opportunity to sell it.</p>
          <p>
            This site is an online market place that allows African women to
            access customers around the world and get better prices for their
            produce by cutting out middle men and connecting them directly with
            buyers in Europe, America, Asia and Australia.
          </p>
        </div>
      </div>
    </>
  )
}
