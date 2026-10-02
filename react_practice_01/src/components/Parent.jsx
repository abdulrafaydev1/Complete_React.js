import React from 'react'

const Parent = ({ name, age, city }) => {
    return (
        <div>
            <h1>this is my name: {name} </h1>
            <h1>this is my age: {age} </h1>
            <h1>this is my city: {city} </h1>
        </div>
    )
}

export default Parent