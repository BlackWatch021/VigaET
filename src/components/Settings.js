import React from 'react'
import { Link } from 'react-router-dom'
import './Settings.css'

const Settings = () => {
    return (
        <div className="settings_wrapper">
            <div className="settings_container">
                <div className="user_entered">
                    <div className="user_entered_details">
                        <Link to='/dashboard'><img className='user_entered_img' src="./data/arrow.svg" alt="" /></Link>
                        <img src="./data/user_1.png" alt="" />
                        <span className='user_name1'>Samuel Doe</span>
                        <span className='user_id'>18BIS1241</span>
                    </div>
                    <div className="edit_profile">
                        <img src="./data/edit.png" alt="" />
                        <span className='editing_profile'>Edit Profile Picture</span>
                    </div>
                </div>
                <div className="setting_1">
                    <div className="setting_1_part">
                        <spam className="setting_1_heading">General Settings</spam>
                        <div className="setting1">
                            <span className='settings_name'>setting 1</span>
                            <img src="./data/arrow.svg" alt="" />
                        </div>
                        <div className="setting1">
                            <span className='settings_name'>setting 2</span>
                            <div className="toggle_button">
                                <div className="toggle_ball"></div>
                            </div>
                        </div>
                        <div className="setting1 setting11">
                            <span className='settings_name'>setting 3</span>
                            <div className="toggle_button1">
                                <div className="toggle_ball1"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="setting_1">
                    <div className="setting_1_part">
                        <spam className="setting_1_heading">General Settings</spam>
                        <div className="setting1">
                            <span className='settings_name'>setting 1</span>
                            <Link className='settings_link' to=''>View More</Link>
                        </div>
                        <div className="setting1 setting11">
                            <span className='settings_name'>setting 2</span>
                            <div className="toggle_button">
                                <div className="toggle_ball"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings