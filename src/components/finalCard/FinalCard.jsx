import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import PriorityChip from '../priority/PriorityChip'
import './FinalCard.css'
import {FaTrashAlt} from 'react-icons/fa'

const FinalCard = ({ setShowCardDetails, card }) => {
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
                    <span>Subtasks</span>
                    {
                        card?.card_subtasks?.length !== 0 &&
                        <div className="subtask_progress-bar_container">
                            <div className="subtask_progress-bar" style={{ width: '50%' }}></div>
                        </div>
                    }
                    <div className='card_subtask_container'>
                        {card?.card_subtasks?.map(task => {
                            return (
                                <div key={task?.subtask_id} className='card_single-subtask'>
                                    <input type="checkbox"/>
                                    <p>{task?.subtask_name}</p>
                                    <FaTrashAlt />
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            <button onClick={() => setShowCardDetails(true)}>close</button>
            </div>
        </div>
    )
}

export default FinalCard
