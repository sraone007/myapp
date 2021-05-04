import React from 'react'
import Styled from 'styled-components'

const Top = Styled.div`
    width:100%;
    height:20%;
    background-color: green;
    color:white;
    padding:.5rem;
    text-align : center;
    
`

function Header() {
    return (
        <Top>
            <h2>header component</h2>
        </Top>
    )
}

export default Header
