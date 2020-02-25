import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Result = (props) => {
        
    return (
    <>
        <h4>Roll something!</h4>
        <h4>{props.roll}</h4>        
    </>
    )
}

export default Result