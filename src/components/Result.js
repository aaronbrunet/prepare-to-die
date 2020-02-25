import React, { useState } from 'react'
import styled from 'styled-components'

const Result = (props) => {
    //const [roll,setRoll] = useState(props.roll)
    return (
    <>
        <h4>Roll something!</h4>
        <h4>{props.roll}</h4>
    </>
    )
}

export default Result