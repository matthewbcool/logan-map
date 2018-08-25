import React from 'react'
import '../App.css'
import RecentPlaces from './RecentPlaces'
import Search from './Search'


const SideBar = () => {
    return (
        <div className='side-bar-box'>
        <Search />
        <RecentPlaces />
        </div>
    )
}

export default SideBar