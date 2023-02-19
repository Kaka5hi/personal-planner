import React from 'react'
import './CardDetails.css'
import {MdOutlineClose} from 'react-icons/md'
import {IoMdPricetag} from 'react-icons/io'
import LabelChips from '../label-chips/LabelChips'

const CardDetails = ({setShowEditableCard, createNewCard, category, categoryId}) => {

    // based on subtask inputs, it will be displayed while editing the card
    const [showSubtask, setShowSubtask] = React.useState(false)
    // dummy card
    const [cardDetails, setCardDetails] = React.useState({
        card_name: '',
        card_description: '',
        card_labels: [],
        card_priority: '',
        card_date: '',
        card_subtasks: []
    })
    // label input state 
    const [label, setLabel] = React.useState('')
    // subtask input state
    const [subTask, setSubTask] = React.useState('')
    // for toggling error msg for empty fields 
    const [errorMsg, setErrorMsg] = React.useState(false)

    const handleLabel = () => {
        if (label === "") {
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 1000);            
        } else {
            const tempLabels = [...cardDetails.card_labels, label]
            setCardDetails(prev => {
                return {...prev, card_labels:tempLabels}
            })
            setLabel('')
        }
    }

    const handleSubtaskSubmit = () => {
        if (subTask === '') {
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 2000);
        } else {
            const newSubTask = {subtask_status: false,subtask_name: subTask, subtask_id: new Date().getTime()}
            const tempSubtasks = [...cardDetails.card_subtasks, newSubTask]
            setCardDetails(prev => {
                return {...prev, card_subtasks:tempSubtasks}
            })
            setSubTask('')
            setShowSubtask(false)    
        }
    }
    
    const handleCreatingNewCard = () => {
        if (cardDetails.card_name && cardDetails.card_description && cardDetails.card_labels && cardDetails.card_priority && cardDetails.card_date && cardDetails.card_subtasks) {
            createNewCard(cardDetails, categoryId);
        } else {
            setErrorMsg(prev => !prev)
            setTimeout(() => {
                setErrorMsg(false)
            }, 4000);
        }
    }

    return (
        <div className='card_details'>
            <div className="card_details-inner_container">
                <div className="card_details-top">
                    <span>New Card</span>
                    <MdOutlineClose title='Close' onClick={() => setShowEditableCard(false)}/>
                </div>
                <div className="card_details-mid">
                    <input 
                        type="text"
                        placeholder="card name"
                        autoComplete="off"
                        value={cardDetails.card_name}
                        onChange={(e) => setCardDetails(prev => {
                            return {...prev, card_name: e.target.value}
                        })}
                    />
                    <input 
                        type="text"
                        placeholder="card description"
                        autoComplete="off"
                        value={cardDetails.card_description}
                        onChange={(e) => setCardDetails(prev => {
                            return {...prev, card_description: e.target.value}
                        })}
                    />
                    <div className="tag_container">
                        <div className="top">
                            <span><IoMdPricetag />labels</span>
                            <input 
                                type="text"
                                placeholder='enter labels'
                                autoComplete="off"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                            <button onClick={handleLabel}>add</button>
                        </div>
                        <div className="bottom">
                            {cardDetails?.card_labels.map((label, index) => <LabelChips key={index} text={label}/>)}
                        </div>
                    </div>
                    <div className="priority_and_date_container">
                        <div className="left">
                            <span>Priority</span>
                            <div className="priority_container">
                                <div>
                                    <input 
                                        type="radio" 
                                        id="High" 
                                        name="Priority" 
                                        value="High" 
                                        onChange={(e) => setCardDetails(prev => {
                                            return {...prev, card_priority: e.target.value}
                                        })} />
                                    <label htmlFor="High">High</label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="Medium" 
                                        name="Priority" 
                                        value="Medium" 
                                        onChange={(e) => setCardDetails(prev => {
                                            return {...prev, card_priority: e.target.value}
                                        })} />
                                    <label htmlFor="Medium">Medium</label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="Low" 
                                        name="Priority" 
                                        value="Low" 
                                        onChange={(e) => setCardDetails(prev => {
                                            return {...prev, card_priority: e.target.value}
                                        })} />
                                    <label htmlFor="Low">Low</label>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <span>Date</span>
                            <input 
                                type='date'
                                autoComplete="off"
                                onChange={
                                    (e) => setCardDetails(prev => {
                                            return {...prev, card_date: e.target.value}
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="subtask_container">
                        <h4 style={{textTransform:'capitalize', fontWeight:500}}>{(cardDetails?.card_subtasks?.length === 0) ? '': 'Subtasks'}</h4>
                        {
                            cardDetails?.card_subtasks?.map(task => {
                                return (
                                    <div key={task?.subtask_id} className='subtask'>
                                        <input type="checkbox"/>
                                        <p>{task?.subtask_name}</p>
                                    </div>
                                )
                            })    
                        }
                        {
                            showSubtask &&
                            <div className="subtask_input-container">
                                <input 
                                    type="text"
                                    placeholder='enter subtask'
                                    autoComplete="off"
                                    value={subTask}
                                    onChange={(e) => setSubTask(e.target.value)}
                                />
                                <div className="subtask_btn-container">
                                    <button onClick={handleSubtaskSubmit}>add</button>
                                    <button onClick={()=> setShowSubtask(false)} >close</button>
                                </div>
                            </div>
                        }
                        <span onClick={()=> setShowSubtask(true)} >+ add subtasks</span>
                    </div>
                    {
                        errorMsg
                        &&
                        <span className="card_error-msg">fields are empty or incorrect</span>
                    }
                    <button onClick={handleCreatingNewCard} style={{alignSelf:'flex-end'}}>create card</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
