import React from 'react'
import './CardDetails.css'
import {MdOutlineClose} from 'react-icons/md'
import {IoMdPricetag} from 'react-icons/io'
import LabelChips from '../label-chips/LabelChips'

const CardDetails = ({setShowEditable}) => {

    const [labels, showLabels] = React.useState(['ui','react', 'random', 'react', 'random'])
    const [subtask, setSubtask] = React.useState([])
    const [showSubtask, setShowSubtask] = React.useState(false)

    const handleSubtaskSubmit = () => {
        console.log('add button clicked');
        setShowSubtask(false)
    }

    return (
        <div className='card_details'>
            <div className="card_details-inner_container">
                <div className="card_details-top">
                    <span>New Card</span>
                    <MdOutlineClose title='Close' onClick={() => setShowEditable(false)}/>
                </div>
                <div className="card_details-mid">
                    <input 
                        type="text"
                        placeholder="card name"
                        autoComplete="off"
                    />
                    <input 
                        type="text"
                        placeholder="card description"
                        autoComplete="off"
                    />
                    <div className="tag_container">
                        <div className="top">
                            <span><IoMdPricetag />labels</span>
                            <input 
                                type="text"
                                placeholder='enter labels'
                                autoComplete="off"
                            />
                        </div>
                        <div className="bottom">
                            {labels && labels.map((label, index) => <LabelChips key={index} text={label}/>)}
                        </div>
                    </div>
                    <div className="priority_and_date_container">
                        <div className="left">
                            <span>Priority</span>
                            <input 
                                type="text"
                                placeholder='enter priority of card'
                                autoComplete="off"
                            />
                        </div>
                        <div className="right">
                            <span>Date</span>
                            <input 
                                type='date'
                                placeholder='enter date'
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="subtask_container">
                        <h4 style={{textTransform:'capitalize'}}>{(subtask.length === 0) ? '': 'Subtask'}</h4>
                        {subtask.map(task => <li>{task}</li>)}
                        {showSubtask && 
                            <div className="subtask_input-container">
                                <input 
                                    type="text"
                                    placeholder='enter subtask'
                                    autoComplete="off"
                                />
                                <div className="subtask_btn-container">
                                    <button onClick={handleSubtaskSubmit}>add</button>
                                    <button onClick={()=> setShowSubtask(false)} >close</button>
                                </div>
                            </div>
                        }
                        <span onClick={()=> setShowSubtask(true)} >+ add subtasks</span>
                    </div>
                    <button style={{alignSelf:'flex-end'}}>create card</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
