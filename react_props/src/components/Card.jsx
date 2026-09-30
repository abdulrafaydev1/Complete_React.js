import React from 'react'

const Card = (props) => {

    console.log(props.user, props.age)
    
    return (
        <div className='perent'>
            <div className="card">
                <h1>{props.user}</h1>
                <p> {props.age} </p>
                <button>View profile</button>
            </div>
        </div>
    )
}

export default Card
