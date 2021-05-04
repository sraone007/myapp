import React from 'react'
import Styled from 'styled-components'

const Top = Styled.div`
    width:100%;
    height:15vh;
    background-color: green;
    color:white;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:.5rem;

    & h2{
        padding-left:2rem;
    }
    
`
const Items = Styled.ul`
    display:flex;
    justify-content: center;
    align-items: center;

    & li{
        text-decoration:none;
        color:white;
        display:block;
        padding:.2rem;
        margin:.5rem;
    }
`;
function Header() {
    return (
        <Top>
            <h2>header component</h2>
            <Items>
                <li>home</li>
                <li>profile</li>
                <li>services</li>
                <li>contact us</li>
            </Items>
        </Top>
    )
}

export default Header
