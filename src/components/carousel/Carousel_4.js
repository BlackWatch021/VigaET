import React from 'react'
import './Carousel_4.css'
import { Link } from 'react-router-dom'

const Login = () => {

    let btn = 'Go to dashboard >'


    return (
        <div className="login_wrapper4">
            <div className="login_container4">
                <div className="img_contain4">
                    <img src="./data/img4.svg" alt="" />
                    <svg width='290' height='176' viewBox="0 0 327 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M183.394 6.80475C223.38 13.4062 264.556 22.191 290.917 52.2776C319.19 84.5472 330.201 127.525 325.869 169.416C321.261 213.969 305.783 261.06 266.866 284.824C229.194 307.827 181.454 294.187 137.828 284.239C97.9969 275.155 58.044 262.81 32.7818 231.442C6.59509 198.926 -3.78694 156.851 2.59418 116.32C9.01561 75.5333 30.8534 37.0616 66.814 15.2793C101.049 -5.45796 143.36 0.19525 183.394 6.80475Z" fill="#858D94" />
                    </svg>


                </div>
                <span className="login_text4">Say no to false reports</span>
                <Link to='/dashboard' className='link'><span className='login_button4'>{btn}</span></Link>
                <div className="slider_dots4">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div id="selected4"></div>
                </div>
            </div>
            <Link to='/dashboard' className='skip4'>Skip</Link>
        </div>
    )
}

export default Login






/**
 1st
 <svg width="305" height="246" viewBox="0 0 305 246" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M160.311 3.14014C203.372 1.33109 252.963 -7.76491 283.598 16.7775C314.279 41.3573 303.468 81.5905 301.803 116.493C300.236 149.361 301.398 184.172 274.438 208.799C246.2 234.594 202.87 244.289 160.311 245.743C115.583 247.27 67.7826 242.538 36.1237 216.937C4.46298 191.334 -2.00393 152.648 0.480271 116.493C2.81299 82.5418 17.5896 49.0429 49.1998 26.6248C79.1216 5.40425 120.569 4.80974 160.311 3.14014Z" fill="#919191"/>
</svg>

 */

/*
2nd 
<svg className='slider_svg' width="449" height="405" viewBox="0 0 449 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M230.371 4.01025C289.768 -3.65268 356.188 -4.02179 400.05 36.9462C444.815 78.7574 451.791 146.141 448.18 207.446C444.801 264.789 423.522 320.401 381.082 358.886C340.557 395.636 284.956 404.342 230.371 404.963C174.97 405.593 118.322 398.53 76.2091 362.354C30.9642 323.488 -4.36622 267.063 0.43802 207.446C5.02962 150.468 56.6079 113.523 99.3053 75.746C138.121 41.4036 179.075 10.6281 230.371 4.01025Z" fill="#858D94" />
                </svg>
*/

/*
3rd
<svg width="327" height="298" viewBox="0 0 327 298" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M183.394 6.80475C223.38 13.4062 264.556 22.191 290.917 52.2776C319.19 84.5472 330.201 127.525 325.869 169.416C321.261 213.969 305.783 261.06 266.866 284.824C229.194 307.827 181.454 294.187 137.828 284.239C97.9969 275.155 58.044 262.81 32.7818 231.442C6.59509 198.926 -3.78694 156.851 2.59418 116.32C9.01561 75.5333 30.8534 37.0616 66.814 15.2793C101.049 -5.45796 143.36 0.19525 183.394 6.80475Z" fill="#858D94"/>
</svg>

*/

/*
4th
<svg width="327" height="298" viewBox="0 0 327 298" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M183.394 6.80475C223.38 13.4062 264.556 22.191 290.917 52.2776C319.19 84.5472 330.201 127.525 325.869 169.416C321.261 213.969 305.783 261.06 266.866 284.824C229.194 307.827 181.454 294.187 137.828 284.239C97.9969 275.155 58.044 262.81 32.7818 231.442C6.59509 198.926 -3.78694 156.851 2.59418 116.32C9.01561 75.5333 30.8534 37.0616 66.814 15.2793C101.049 -5.45796 143.36 0.19525 183.394 6.80475Z" fill="#858D94"/>
</svg>

*/
