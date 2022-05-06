import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {




    return (
        <div className="login_wrapper">
            <div className="login_container">
                <img src="./data/logo_2.png" alt="" />
                <div className="form">
                    <form action="post">
                        <input type="text" placeholder='Username' required />
                        <input type="password" placeholder='Password' required />
                        <span className='span1'>Reset Password From Default/</span>
                        <span className='span2'>Forgot Password</span>

                        <Link className='login_submit' to='/intro1'>Log In</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

