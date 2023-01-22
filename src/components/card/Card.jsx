import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import { MdMoreHoriz, MdAccessTime } from 'react-icons/md'
import { FaTasks } from 'react-icons/fa'
import './Card.css'
import PriorityChip from '../priority/PriorityChip'
import Dropdown from '../dropdown/Dropdown'
import FinalCard from '../finalCard/FinalCard'

const Card = ({ card, deleteCard, cardId, categoryId, handleDragEnter, handleDragEnd, categoryList ,setCategoryList }) => {

    const [dropdown, setDropdown] = React.useState(false)
    const [showCardDetails, setShowCardDetails] = React.useState(true)

    const [cardValue, setCardValue] = React.useState(card)

    const calculateDate = () => {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const dateArr = [...card?.card_date]
        const monthIndex = dateArr[5] + dateArr[6] - 1
        const date = `${dateArr[8]}${dateArr[9]}`
        const day = `${date} ${month[monthIndex]}`
        return day;
    }

    const updateSubtaskStatus = (subtaskId, subtaskStatus, cardId, catId,) => {
        // finding category index
        const catIndex = categoryList.findIndex(item => item?.category_id === catId)
        if (catIndex < 0) return

        // finding card index 
        const cardIndex = categoryList[catIndex]?.category_cards.findIndex(item => item?.card_id === cardId)
        if (cardIndex < 0) return
        
        // finding subtask index
        const subtaskIndex = cardValue?.card_subtasks.findIndex(item => item?.subtask_id === subtaskId)
        if (subtaskIndex < 0) return
        
        // copy whole categorList
        const tempCategoryList = [...categoryList]
        // copy particular card subtask based on subtask index value
        const tempSubtask = cardValue?.card_subtasks[subtaskIndex]
        // modify/make change accoding to need
        const newSubtask = { ...tempSubtask, subtask_status: !subtaskStatus }
        // now modify temp categoryList with new subtask value
        tempCategoryList[catIndex].category_cards[cardIndex].card_subtasks.splice(subtaskIndex, 1, newSubtask)
        // assign back to categoryList
        setCategoryList(tempCategoryList);
    }

    
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
                    <h4 style={{ userSelect: 'none' }}>{cardValue?.card_name}</h4>
                    <MdMoreHoriz onClick={() => setDropdown(prev => !prev)} />
                </div>
                <div className="card_middle">
                    {cardValue?.card_labels.map((item, index) => <LabelChips key={index} text={item} />)}
                    <PriorityChip priority={cardValue?.card_priority} />
                </div>
                <div className="card_bottom">
                    {cardValue?.card_date &&
                        <span>
                            <MdAccessTime />
                            due {calculateDate()}
                        </span>
                    }
                    {cardValue?.card_subtasks.length !==0 && 
                        <span>
                            <FaTasks />
                            {cardValue?.card_subtasks?.filter(item => item?.subtask_status === true).length}/{cardValue?.card_subtasks.length} subtasks completed
                        </span>
                    }
                </div>
                <button title='View card details' onClick={() => setShowCardDetails(false)}>view</button>
            </div>
        )
    } else {
        return (
            <FinalCard
                setShowCardDetails={setShowCardDetails}
                card={cardValue}
                calculateDate={calculateDate}
                categoryId={categoryId}
                categoryList={categoryList}
                setCategoryList={setCategoryList}
                updateSubtaskStatus={updateSubtaskStatus}
            />
        )
    }
}
export default Card
