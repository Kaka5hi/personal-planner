import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import { MdMoreHoriz, MdAccessTime } from 'react-icons/md'
import { FaTasks } from 'react-icons/fa'
import './Card.css'
import PriorityChip from '../priority/PriorityChip'
import Dropdown from '../dropdown/Dropdown'
import FinalCard from '../finalCard/FinalCard'

const Card = ({ card, deleteCard, cardId, categoryId, handleDragEnter, handleDragEnd }) => {

    const [dropdown, setDropdown] = React.useState(false)
    const [showCardDetails, setShowCardDetails] = React.useState(true)

    if (showCardDetails) {
        return (
            <div style={{ position: 'relative' }} className='card' draggable
                onDragEnter={() => handleDragEnter(cardId, categoryId)}
                onDragEnd={() => handleDragEnd(cardId, categoryId)}
            >
                {dropdown && <Dropdown
                    type={'card'}
                    deleteCard={deleteCard}
                    cardId={cardId}
                    categoryId={categoryId}
                />}
                <div className="card_top">
                    <h4 style={{ userSelect: 'none' }}>{card.card_name}</h4>
                    <MdMoreHoriz onClick={() => setDropdown(prev => !prev)} />
                </div>
                <div className="card_middle">
                    {card?.card_labels.map((item, index) => <LabelChips key={index} text={item} />)}
                    <PriorityChip priority={card?.card_priority} />
                </div>
                <div className="card_bottom">
                    {card.card_date &&
                        <span>
                            <MdAccessTime />
                            due sep 12 (1 day left)
                        </span>
                    }
                    <span>
                        <FaTasks />
                        3/12 subtasks completed
                    </span>
                </div>
                <button onClick={() => setShowCardDetails(false)}>view</button>
            </div>
        )
    } else {
        return (
            <FinalCard
                setShowCardDetails={setShowCardDetails}
                card={card}
            />
        )
    }
}
export default Card
