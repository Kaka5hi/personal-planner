import React from 'react'
import { useParams } from 'react-router-dom'
import SingleBoard from '../components/board/SingleBoard'

const Board = () => {
    const params = useParams()

    return (
        <div className='page-container'>
            <div className="board_top-container">
                <h1 style={{textAlign:'center', textTransform:'capitalize'}}>{params.name}</h1>
            </div>
            <div className="board_inner-container">
                <SingleBoard />
            </div>
        </div>
    )
}

export default Board
