import React from 'react'
import './LabelChips.css'

const labelChips = ({text, color}) => {
    return (
        <div className='label_chips'>
            <span style={ color ? {background: color} : {background: '#5856d6'}}>{text}</span>
        </div>
    )
}

export default labelChips
