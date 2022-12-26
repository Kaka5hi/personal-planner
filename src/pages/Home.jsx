import React from 'react'
import Weather from '../components/weather-app/Weather'
import './Home.css'

const Home = () => {
    return (
        <div className='page-container'>
            <div className="home-inner_container">
                <div className='top-section'>
                    <div className="top-section_left">
                        <h1>Welcome User</h1>
                        <span>Create something new today</span>
                    </div>
                    <div className="top-section_right">
                        <Weather />
                    </div>
                </div> 
                <div className='bottom-section'>
                    <div className="bottom-section_first">
                        first
                    </div>
                    <div className="bottom-section_second">
                        second
                    </div>
                    <div className="bottom-section_third">
                        third
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Home
