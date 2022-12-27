import React from 'react'
import './RecentTask.css'
import {BsGridFill, BsListUl} from 'react-icons/bs'
import SingleTask from '../single-task/SingleTask'

const RecentTask = () => {

    const [changeView, setChangeView] = React.useState(false)


    return (
        <div className='recent-task_main-container'>
            <div className="recent-task_button-container">
                <button onClick={() => setChangeView(false)} style={changeView ? {} : {backgroundColor:'black', color: 'white'}} title='Grid View'><BsGridFill/>grid view</button>
                <button onClick={() => setChangeView(true)} style={changeView ? {backgroundColor:'black', color: 'white'} : {}} title='List View'><BsListUl/>list view</button>
            </div>
            <div style={changeView ? {gridTemplateColumns: '1fr'} : {gridTemplateColumns: 'repeat(2, 1fr)'}} className="recent-task_inner-container">
                
                <SingleTask />
                <SingleTask />
                <SingleTask />
                <SingleTask />
            </div>
        </div>
    )
}

export default RecentTask
