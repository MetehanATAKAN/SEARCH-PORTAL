import React from 'react'
import tesodev from "../../src/tesodev.jpg";
import {Link} from "react-router-dom";
import "../App.css";

const ListPageHeader=()=> {
    return (
        <div className='tesodev-logo'>
            <Link to="/"><img src={tesodev} alt="tesodev" width={149} height={63} /></Link>
        </div>
    )
}

export default ListPageHeader
