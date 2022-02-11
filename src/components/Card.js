import React from "react"
import RedStar from "../images/star.png"
//import PicFolder from "../images/"

export default function Card(props) {
    console.log(props)
    const IMGPATH = (imgName) => {
        return require(`../images/${imgName}`)
    }
    // JS
    return (
        // JSX
        <div className="card">
            {/* src={} back to JS, then at 'className' back to JSX */}
            {/* <img src={`../images/${props.img}`} className="card--image" />*/}
            <img src={ IMGPATH(props.img) } className="card--image" alt=""/>
            <div className="card--stats">
                <img src={ RedStar} className="card--star" alt="rate star"/>
                <span>{ props.rating }</span>
                <span className="gray">({ props.reviewCount }) • </span>
                <span className="gray">USA</span>
            </div>
            <p> {props.title} </p>
            <p><span className="bold">From ${ props.price }</span> / person</p>
        </div>
    )
}