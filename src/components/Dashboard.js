import React from 'react'
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className="dashboard_wrapper">
            <h1>My Classes</h1>
            <div className="dashboard_container">
                <div className="class_detail_1">
                    <p>Neural Networks and Fuzzy Control</p>
                    <p>CSE3013</p>
                </div>
                <img src="./data/arrow.svg" alt="" />
            </div>
            <div className="dashboard_container dashboard_container2">
                <div className="class_detail_1 class_detail_11">
                    <p>IOT System Architecture</p>
                    <p>ECE1029</p>
                </div>
                <img className='shrink' src="./data/arrow.svg" alt="" />
            </div>
        </div>
    )
}

export default Dashboard