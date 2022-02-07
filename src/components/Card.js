import React from "react"
import RedStar from "../images/star.png"
import Pic1 from "../images/katie-zaferes.png"

export default function Card(){
    return (
        <div className="card">
            <img
                src={ Pic1 }
                alt="card1"
                className="hero--photo"
            />
            <div className="card--stats">
                <img src= { RedStar } className="card--star"/>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
