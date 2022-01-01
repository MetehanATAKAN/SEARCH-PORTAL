import React from 'react'
import tesodev from "../../src/tesodev.jpg";

const Header=()=> {
    return (
        <div className='header'>
           <img src={tesodev} alt="tesodev" width={278} height={115} />                       
            <p>Search Web App</p>
        </div>
    )
}

export default Header
