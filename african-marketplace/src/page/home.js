import React from "react"
import FormLogin from "../component/FormLogin"
import ButtonStyle from "../css/Button"
import Button from "../css/Button"
import "../css/home.css"

export default function HomePage(props) {
  return (
    <>
      <div className="homeMainDiv">
        <div className="leftSide">
          <div className="topLeftDiv ">
            <h2>
              Anyone can start selling today - <br></br>it really is that simple
            </h2>
          </div>

          <div className="bottomLeftDiv">
            <p>African women are cut off from the global economy.</p>
            <p>They have produce, but no opportunity to sell it.</p>
            <p>
              This site is an online market place that allows African women to
              access customers around the world and get better prices for their
              produce by cutting out middle men and connecting them directly
              with buyers in Europe, America, Asia and Australia.
            </p>
          </div>
        </div>
        <img src="/images/map.png" className="map"></img>
      </div>
    </>
  )
}
