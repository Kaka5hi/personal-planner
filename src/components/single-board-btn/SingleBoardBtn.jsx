import React from 'react'
import {FaExternalLinkAlt, FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SingleBoardBtn = ({item, boards, setBoards}) => {

    const handleBoardDelete = (id) => {
        const filteredList = boards.filter(item => item.id !== id)
        setBoards(filteredList);
        localStorage.setItem('boardList', JSON.stringify(filteredList))
    }

    return (
        <div id={item.id} className="create_board-item_container">
            <h1>{item.boardName}</h1>
            <div className="btn-container">
                <Link to={`/project/board/${item.boardName}/${item.id}`} title='Go to Board'><FaExternalLinkAlt /></Link>
                <button onClick={() => handleBoardDelete(item.id)} title='Delete Board'><FaTrashAlt /> </button>
            </div>
        </div>
    )
}

export default SingleBoardBtn
