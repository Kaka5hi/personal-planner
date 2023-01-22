import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import PriorityChip from '../priority/PriorityChip'
import './FinalCard.css'
import { FaTasks } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import Subtask from '../single-subtask/Subtask'

const FinalCard = ({ setShowCardDetails, card, calculateDate, categoryId, updateSubtaskStatus }) => {

    const progressBarWidth = () => {
        const progress = card?.card_subtasks?.filter(item => item?.subtask_status === true).length / card?.card_subtasks.length
        if (progress === NaN) {
            return 0
        } else {
            return (progress * 100);
        }
    }
  
    return (
        <div className='final_card'>
            <div className="final_card-inner_container">
                <div className="top">    
                    <span>{card?.card_name}</span>
                    <p>{card?.card_description}</p>
                </div>
                <div className="mid">
                    {card?.card_labels.map((item, index) => <LabelChips key={index} text={item} />)}
                    <PriorityChip priority={card?.card_priority} />
                </div>
                <div className="bottom">
                    {card?.card_date &&
                        <span className='date'>
                            <MdAccessTime />
                            due {calculateDate()}
                        </span>
                    }
                    {card?.card_subtasks.length !==0 && 
                        <span className='subtask'>
                            <FaTasks />
                            {card?.card_subtasks?.filter(item => item?.subtask_status === true).length}/{card?.card_subtasks.length} subtasks completed
                        </span>
                    }
                    <span style={{ fontWeight: 500 }} >{card?.card_subtasks.length === 0 ? '' : 'Subtasks'}</span>
                    {
                        card?.card_subtasks?.length !== 0 &&
                        <div className="subtask_progress-bar_container">
                            <div className="subtask_progress-bar" style={{ width:`${progressBarWidth()}%`, background: `${progressBarWidth() === 100 ? '#4cd964':'#72a0c9'}`}}></div>
                        </div>
                    }
                    <div className='card_subtask_container'>
                        {
                            card?.card_subtasks?.map(task => <Subtask
                                key={task?.subtask_id}
                                subtaskId={task?.subtask_id}
                                subtaskName={task?.subtask_name}
                                subtaskStatus={task?.subtask_status}
                                cardId={card?.card_id}
                                categoryId={categoryId}
                                updateSubtaskStatus={updateSubtaskStatus}
                            />)
                        }
                    </div>
                </div>
            <button title='Close card details' onClick={() => setShowCardDetails(true)}>close</button>
            </div>
        </div>
    )
}

export default FinalCard
