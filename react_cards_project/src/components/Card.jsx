import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />
            <h3>{props.company}</h3>
            <h2>{props.jobTitle}</h2>
            <p>{props.jobType}</p>
            <p>Seior level</p>
        </div>
    )
}

export default Card
