import React from 'react'

// components
import Navbar from './components/navbar'
import Navigation from './components/navigation'

// pages
import ShowTables from './pages/show-table'

function Main () {
    return (
        <div>
            <Navbar/>
            <Navigation/>
            <ShowTables/>
        </div>    
    )
}

export default Main