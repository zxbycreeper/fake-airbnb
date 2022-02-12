import React from "react"
import RedStar from "../images/star.png"
//import PicFolder from "../images/"

export default function Card(props) {

    console.log(props)

    const IMGPATH = (imgName) => {
        return require(`../images/${imgName}`)
    }

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    // JS
    return (
        // JSX
        <div className="card">

            {/* use the truthness of variable with values and falseness of undefined*/}
            { badgeText && <div className="card--badge"> {badgeText} </div>}

            {/* src={} back to JS, then at 'className' back to JSX */}
            {/* <img src={`../images/${props.img}`} className="card--image" />*/}
            <img src={ IMGPATH(props.item.coverImg) } className="card--image" alt=""/>
            <div className="card--stats">
                <img src={ RedStar} className="card--star" alt="rate star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title"> {props.item.title} </p>
            <p><span className="bold">From ${ props.item.price }</span> / person</p>
        </div>
    )
}