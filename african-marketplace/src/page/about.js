import React from "react"
import "../css/about.css"

export default function AboutPage(props) {
  return (
    <div className="aboutMainDiv">
      <div className="aboutPage">
        <h2>About us</h2>
      </div>
      <div
        className="topBG"
        style={{
          backgroundImage: `url("/images/about.png")`,
        }}
      ></div>

      <div className="aboutInfo">
        AfriCart is a marketplace that bridges the gap between farmers and
        consumers who want better access to healthier foods. Our platform is
        made to help African women sell their produce online, and allows anyone
        with an internet connection to purchase products form the comfort of
        their home. We are disrupting the African grocery supply chain, and
        unlocking a new way for food entrepreneurs to make money and support
        their families.
      </div>
    </div>
  )
}
