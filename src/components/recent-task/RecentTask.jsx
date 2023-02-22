import React from 'react'
import './RecentTask.css'
import {BsGridFill, BsListUl} from 'react-icons/bs'
import SingleTask from '../single-task/SingleTask'
import GridView from '../grid-view/GridView'

const RecentTask = () => {

    // create 3 different component here ->  
    // 1. for no projectData
    // 2. for grid view
    // 3. for list view
    const [changeView, setChangeView] = React.useState(false)
    const [localProjectData, setLocalProjectData] = React.useState(JSON.parse(localStorage.getItem('boardList')) || [])

    return (
        <div className='recent-task_main-container'>
            <div className="recent-task_button-container">
                <button onClick={() => setChangeView(false)} style={changeView ? {} : {backgroundColor:'black', color: 'white'}} title='Grid View'><BsGridFill/>grid view</button>
                <button onClick={() => setChangeView(true)} style={changeView ? {backgroundColor:'black', color: 'white'} : {}} title='List View'><BsListUl/>list view</button>
            </div>
            <div style={changeView ? {gridTemplateColumns: '1fr'} : {gridTemplateColumns: 'repeat(2, 1fr)'}} className="recent-task_inner-container">
                {
                    changeView
                        ? localProjectData?.map(board => <SingleTask key={board?.id} item={board} />)
                        : localProjectData?.map(board => <GridView key={board?.id} item={board} />)
                }
            </div>
            {
                (localProjectData?.length === 0)
                &&
                <div className='no-data-section'>
                    <h4>No projects</h4>
                    <p>Go to Project section to create </p>
                </div>
            }
        </div>
    )
}

export default RecentTask
