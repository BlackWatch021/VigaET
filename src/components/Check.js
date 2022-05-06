import React from 'react'
import { Link } from 'react-router-dom'
import './Check.css'

const Check = () => {
    return (
        <div className="check_wrapper">
            <div className="check_container">
                <div className="check_user_details">
                    <div className="check_part1">
                        <Link to='/dashboard'><img className='check_part1_img' src="./data/arrow.svg" alt="" /></Link>
                        <span>Graduate Record Examination</span>
                    </div>
                    <div className="check_part2">
                        <span className='check_part2_span1'>17th Dec 2020</span><br />
                        <span className='check_part2_span2'>9:00 am - 12:00 pm </span>
                    </div>
                </div>
                <div className="all_user_detail_checking">
                    <img src="./data/user_2.png" alt="" />
                    <div className="net_check">
                        <div className="net_check_checking">
                            <img src="./data/right_tick.png" alt="" />
                            <span>Webcam check</span>
                        </div>
                        <div className="net_check_checking">
                            <img src="./data/right_tick.png" alt="" />
                            <span>Mic testing</span>
                        </div>
                        <div className="net_check_checking">
                            <img className='check_cross' src="./data/plus-solid.svg" alt="" />
                            <span>α Iris sync</span>
                        </div>
                        <div className="net_check_checking">
                            <img className='check_cross' src="./data/plus-solid.svg" alt="" />
                            <span>BT / Alien hardware detection</span>
                        </div>
                        <div className="net_check_checking">
                            <img src="./data/right_tick.png" alt="" />
                            <span>QR / Virtual Machine detection</span>
                        </div>
                        <div className="net_check_checking">
                            <div className="buffer"></div>
                            <span>Browser lock</span>
                        </div>
                        <div className="net_check_checking">
                            <div className="buffer"></div>
                            <span>Screen capture</span>
                        </div>
                        <div className="net_check_checking">
                            <div className="buffer"></div>
                            <span>Identity authentication</span>
                        </div>
                        <Link className='check_link' to=''>Start Exam</Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <footer>
                    <Link className='to_be_hidden' to=''>Take Demo Exam</Link>
                    <div className="user_details">
                        <div className="user_name">
                            <Link className='user_span' to='/settings'>
                                <span>Samuel Doe</span><br />
                                <span>18BIS1241</span>
                            </Link>
                        </div>
                        <Link to='/settings'><img src="./data/user_1.png" alt="" /></Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Check