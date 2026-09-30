import React from 'react'

const Card = (props) => {

    console.log(props)
    return (

        <div className="card">
            <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />
            <h3>{props.name}</h3>
            <h2>Seior UI/UX designer</h2>
            <p>Part-time</p>
            <p>Seior level</p>
        </div>
    )
}

export default Card
