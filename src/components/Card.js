import React from "react"
import RedStar from "../images/star.png"
import Pic1 from "../images/katie-zaferes.png"

export default function Card(){
    return (
        <div className="card">
            <img
                src={ Pic1 }
                alt="card1"
<<<<<<< HEAD
                className="card--image"
            />
            <div className="card--stats">
                <img src= { RedStar } className="card--star" alt="star"/>
=======
                className="hero--photo"
            />
            <div className="card--stats">
                <img src= { RedStar } className="card--star"/>
>>>>>>> b03a745c60f4d928ce09690a05b2c44288208a16
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
