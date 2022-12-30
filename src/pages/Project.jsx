import React from 'react'
import SingleBoardBtn from '../components/single-board-btn/SingleBoardBtn'
import './Project.css'

const Project = () => {
    return (
        <div className='page-container'>
            <div className="project_outer-container">
                <div className="create_board-btn_container">
                    <button title='Create Board'>Create Board +</button>
                </div>
                <SingleBoardBtn />
                <SingleBoardBtn />
                <SingleBoardBtn />
                <SingleBoardBtn />
                <SingleBoardBtn />
                <SingleBoardBtn />
                <SingleBoardBtn />
                <SingleBoardBtn />
            </div>
        </div>
    )
}

export default Project
