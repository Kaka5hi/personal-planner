import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import './Card.css'

const Card = () => {
    return (
        <div className='card'>
            <div className="card_top">
                <h4>Card heading</h4>
            </div>
            <div className="card_middle">
                <LabelChips />
                <LabelChips />
                <LabelChips />
            </div>
            <div className="card_bottom"></div>
        </div>
    )
}

export default Card
