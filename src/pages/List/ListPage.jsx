import React from 'react'
import ListPageHeader from '../../components/ListPageHeader'
import ListPageResults from '../../components/ListPageResults'

function ListPage() {
    return (
        <div className='list-page'>
            <ListPageHeader/>
            <ListPageResults/>
        </div>
    )
}

export default ListPage
