import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import { MdMoreHoriz, MdAccessTime } from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import './Card.css'
import PriorityChip from '../priority/PriorityChip'

const Card = () => {
    return (
        <div className='card'>
            <div className="card_top">
                <h4>Card heading</h4>
                <MdMoreHoriz />
            </div>
            <div className="card_middle">
                <LabelChips />
                <LabelChips />
                <LabelChips />
                <LabelChips />
                <PriorityChip />
            </div>
            <div className="card_bottom">
                <span>
                    <MdAccessTime />
                    due sep 12 (1 day left)
                </span>
                <span>
                    <FaTasks />
                    3/12 subtasks completed
                </span>
            </div>
        </div>
    )
}

export default Card
