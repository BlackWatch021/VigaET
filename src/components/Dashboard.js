import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {

    return (<>
        <div className="dashboard_wrapper">
            <h1>My Classes</h1>
            <div className="dashboard_container">
                <div className="class_detail_1">
                    <p>Neural Networks and Fuzzy Control</p>
                    <p>CSE3013</p>
                </div>
                <img src="./data/arrow.svg" alt="" />
            </div>
            <div id='dashboard_container2' className="dashboard_container ">
                <div className="class_details">
                    <div className="class_detail_1 class_detail_11">
                        <p>IOT System Architecture</p>
                        <p>ECE1029</p>
                    </div>
                    <img className='shrink' src="./data/arrow.svg" alt="" />
                </div>
                <div className="exam_details">
                    <span className='testing_span1'>CAT 1</span>
                    <div className='test_timing'>
                        <span>22nd Dec 2020</span>
                        <div className='exam_dot'></div>
                        <span>9:00 am - 12:00 pm</span>
                        <img className='test_notification' src="./data/notification_bell.svg" alt="" />
                    </div>
                    <Link className='testing_link' to=''>completed</Link>
                </div>


                <div className="exam_details">
                    <span className='testing_span1'>CAT 2</span>
                    <div className='test_timing'>
                        <span>12th Jan 2021</span>
                        <div className='exam_dot'></div>
                        <span>9:00 am - 12:00 pm</span>
                        <img className='test_notification' src="./data/notification_bell.svg" alt="" />
                    </div>
                    <Link className='testing_link testing_link1' to='/'>Join Exam</Link>
                </div>

                <div className="exam_details">
                    <span className='testing_span1'>Lab FAT</span>
                    <div className='test_timing'>
                        <span>22nd Mar 2021</span>
                        <div className='exam_dot'></div>
                        <span>9:00 am - 12:00 pm</span>
                        <img className='test_notification' src="./data/notification_bell.svg" alt="" />
                    </div>
                    <Link className='testing_link' to=''>Yet to start</Link>
                </div>
            </div>

        </div>
        <div className="footer">
            <footer>
                <Link to=''>Take Demo Exam</Link>
                <div className="user_details">
                    <div className="user_name">
                        <Link className='user_span' to='/'>
                            <span>Samuel Doe</span><br />
                            <span>18BIS1241</span>
                        </Link>
                    </div>
                    <Link to='/'><img src="./data/user_1.png" alt="" /></Link>
                </div>
            </footer>
        </div>
    </>
    )
}

export default Dashboard