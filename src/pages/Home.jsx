import React from 'react'
import RecentTask from '../components/recent-task/RecentTask'
import ToDoList from '../components/to-do-app/ToDoList'
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
                    <div className="bottom-section_left">
                        <h1>recent task</h1>
                        <RecentTask />
                    </div>
                    <div className="bottom-section_right">
                        <h1>quick to-do list</h1>
                        <ToDoList />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Home
