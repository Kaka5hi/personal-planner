import React from 'react'
import {RiFlag2Line} from 'react-icons/ri'
import './PriorityChip.css'

const PriorityChip = () => {
    return (
        <div className='priority_chips'>
             {/* check color pallet and refer to apple ios color pallet */}
            <span>High <RiFlag2Line /></span> 
        </div>
    )
}

export default PriorityChip
