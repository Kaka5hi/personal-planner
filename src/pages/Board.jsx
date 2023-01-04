import React from 'react'
import { useParams } from 'react-router-dom'
import SingleBoard from '../components/board/SingleBoard'
import './Board.css'

const Board = () => {
    const params = useParams()

    return (
        <div className='page-container ' style={{paddingRight:0, paddingBottom: '2px', paddingLeft: 0}}>
            <h1 style={{textAlign:'center', textTransform:'capitalize'}}>{params.name}</h1>
            <div className="board_outer-container">
                <div className="board_inner-container ">
                    <SingleBoard />
                    <SingleBoard />
                    <SingleBoard />
                    <SingleBoard />
                </div>
            </div>
        </div>
    )
}

export default Board
