import React from "react"
import Login from './login'
import ButtonStyle from "../css/Button"
import Button from "../css/Button"
import "../css/Home.css"

export default function HomePage(props) {
  return (
    <>
      <div className="homeMainDiv">
        <div className="leftSide">
          <div className="topLeftDiv ">
            <p className="topLeftText">
              Anyone can start selling today - <br></br>it really is that simple
            </p>
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
        <div className="rightSide">
          <img src="/images/map.png" className="map"></img>
          <img src="/images/fruits.png" className="fruits"></img>
        </div>
      </div>
    </>
  )
}
