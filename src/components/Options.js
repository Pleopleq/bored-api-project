import React from 'react'

const Options = ({ name }) => {
    return (
        <option value={name} key={name}>{name}</option>
    )

}

export default Options