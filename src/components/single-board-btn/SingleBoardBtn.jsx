import React from 'react'
import {FaExternalLinkAlt, FaTrashAlt} from 'react-icons/fa'

const SingleBoardBtn = () => {
    return (
        <div className="create_board-item_container">
            <h1>Board name</h1>
            <div className="btn-container">
                <button title='Go to Board'><FaExternalLinkAlt /></button>
                <button title='Delete Board'><FaTrashAlt /> </button>
            </div>

        </div>
    )
}

export default SingleBoardBtn
