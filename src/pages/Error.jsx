import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='page_container'>
            <div className="error_msg_container">
                <div className="center">
                    <h1>404. Page not found!</h1>
                    <Link to='/'>Go back to Dashboard</Link>
                </div>

            </div>
        </div>
    )
}

export default Error
