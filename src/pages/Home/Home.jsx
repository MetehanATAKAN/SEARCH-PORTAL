import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import SearchBarResults from '../../components/SearchBarResults'


function Home() {
    return (
        <div className='home'>
            <Header/>
            <SearchBar/>
            <SearchBarResults/>
        </div>
    )
}

export default Home
