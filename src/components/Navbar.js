import React from "react"
import AirbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img
                src={AirbnbLogo}
                alt="airbnb logo"
                className="nav--logo"
            />

        </nav>
    )
}
