import React from 'react'
import {RiFlag2Line} from 'react-icons/ri'
import './PriorityChip.css'

const PriorityChip = ({priority}) => {
    return (
        <div className='priority_chips'>
            <span>{priority}<RiFlag2Line /></span> 
        </div>
    )
}

export default PriorityChip
