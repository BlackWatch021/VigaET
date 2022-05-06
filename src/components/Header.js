import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header_wrapper'>
            <div className="heading">
                <h3>Proctor Vision</h3>
            </div>
            <div className="search"><img className='search_logo' src="./data/search.svg" alt="" /><span className='search_span'>search</span></div>
            <div className="windows_option">Windwos Options</div>
        </div>
    )
}

export default Header