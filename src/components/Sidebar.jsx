import React from 'react'
import Styled from 'styled-components'

const Side = Styled.div`
    width:25vw;
    height:90vh;
    align:left;
    background-color:silver;
`
function Sidebar() {
    return (
        <Side>
            <h2>side bar</h2>
        </Side>
    )
}

export default Sidebar
