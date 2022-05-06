import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    let btn = 'Continue  >'
    return (
        <div className='wrapper'>
            <div className="container">
                <img src="./data/logo_1.png" alt="" />
                <div className="headings">
                    <p>Welcome aboard</p>
                    <p>to the future in the making</p>
                    <p>you've just become the part of it</p>
                </div>
                <Link to='/login' className='home_link'>{btn}</Link>
            </div>
        </div>
    )
}

export default Home