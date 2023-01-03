import React from 'react'
import './SingleBoard.css'
import { MdMoreHoriz } from 'react-icons/md'
import Card from '../card/Card.jsx'

const SingleBoard = () => {
    return (
        <div className='board'>
            <div className="board_heading">
                <h4>Heading of the card <span>0</span></h4>
                <MdMoreHoriz />
            </div>
            <div className="board_cards-container">
                <Card />
            </div>
        </div>
    )
}

export default SingleBoard
