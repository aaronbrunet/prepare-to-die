import React, { useState } from 'react'
import styled from 'styled-components'

const Dice = (props) => {
    const die = props.die
    return (
        <div className="Dice">
            <h4>{die.name}</h4>
            <p>Sides: {die.sides}</p>
        </div>
    )
}

export default Dice