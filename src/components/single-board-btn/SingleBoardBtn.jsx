import React from 'react'
import {FaExternalLinkAlt, FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SingleBoardBtn = () => {
    return (
        <div className="create_board-item_container">
            <h1>Board name</h1>
            <div className="btn-container">
                <Link to='/project/board/2' title='Go to Board'><FaExternalLinkAlt /></Link>
                <button title='Delete Board'><FaTrashAlt /> </button>
            </div>

        </div>
    )
}

export default SingleBoardBtn
